import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lxtbtmbxw.css';
import '../../css/t/tjnclna9s.css';
import '../../css/v/vbbc61k-h.css';
import '../../css/w/wc3k_ibqh.css';
import '../../css/j/jt8bh8b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="lxtbtmbxw"/><path class="tjnclna9s"/><path class="vbbc61k-h"/><path class="wc3k_ibqh"/><path class="jt8bh8b_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:orbit"} {...others} />);
}

export default Component;
