import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlm5yub9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlm5yub9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:heart-arrow-down"} {...others} />);
}

export default Component;
