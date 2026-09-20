import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_cec3aod.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r_cec3aod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:lock-semi-open-20-solid"} {...others} />);
}

export default Component;
