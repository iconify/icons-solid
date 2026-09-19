import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylle61bfh.css';
import '../../css/s/s2-lzh_ok.css';
import '../../css/z/zid3siael.css';
import '../../css/a/al94q0bjj.css';
import '../../css/v/vftjr8bge.css';
import '../../css/o/o4xdvs9pu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ylle61bfh"/><path class="s2-lzh_ok"/><path class="zid3siael"/><path class="al94q0bjj"/><path class="vftjr8bge"/><path class="o4xdvs9pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:horse"} {...others} />);
}

export default Component;
