import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iypo-rqra.css';
import '../../css/y/y2-zu1b4b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iypo-rqra"/><path class="y2-zu1b4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scrubber-20"} {...others} />);
}

export default Component;
