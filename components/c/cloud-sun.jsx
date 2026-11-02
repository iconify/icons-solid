import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w7ydxzrjh.css';
import '../../css/a/a0msubbfz.css';
import '../../css/h/hddk-cekh.css';
import '../../css/j/j-232vcjp.css';
import '../../css/d/din521b4s.css';
import '../../css/u/ueehb0b_s.css';
import '../../css/x/x85chbcks.css';
import '../../css/n/n3l9icbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="w7ydxzrjh"/><path class="a0msubbfz"/><path class="hddk-cekh"/><path class="j-232vcjp"/><path class="din521b4s"/><path class="ueehb0b_s"/><path class="x85chbcks"/><path class="n3l9icbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cloud-sun"} {...others} />);
}

export default Component;
