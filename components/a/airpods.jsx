import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f1i2ht_kw.css';
import '../../css/y/yrrx_8byh.css';
import '../../css/a/a9lq0obau.css';
import '../../css/h/hqp__5swk.css';
import '../../css/c/c_q_e1ddn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="f1i2ht_kw"/><path class="yrrx_8byh"/><path class="a9lq0obau"/><path class="hqp__5swk"/><path class="c_q_e1ddn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:airpods"} {...others} />);
}

export default Component;
