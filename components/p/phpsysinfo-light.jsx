import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr6lp2beq.css';
import '../../css/m/m74onmbrl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zr6lp2beq"/><path class="m74onmbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:phpsysinfo-light"} {...others} />);
}

export default Component;
