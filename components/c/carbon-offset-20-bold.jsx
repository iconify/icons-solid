import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zle0wgbup.css';
import '../../css/u/uxo-7bbsr.css';
import '../../css/v/vz0osi9vl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zle0wgbup"/><path class="uxo-7bbsr"/><path class="vz0osi9vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-offset-20-bold"} {...others} />);
}

export default Component;
