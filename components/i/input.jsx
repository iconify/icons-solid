import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgb1p3bxd.css';
import '../../css/r/rlnza7pox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fgb1p3bxd"/><path class="rlnza7pox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:input"} {...others} />);
}

export default Component;
