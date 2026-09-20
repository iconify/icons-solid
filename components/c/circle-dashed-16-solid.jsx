import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp1j6ubpv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gp1j6ubpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:circle-dashed-16-solid"} {...others} />);
}

export default Component;
