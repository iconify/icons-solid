import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9qodcbbj.css';
import '../../css/m/mjb1qruym.css';
import '../../css/y/y80kb3pzy.css';
import '../../css/h/hvmli08jr.css';
import '../../css/d/d-_7qwbfg.css';
import '../../css/k/kdky4fbik.css';
import '../../css/x/xkttnv7bf.css';
import '../../css/u/ud9hs1w1v.css';
import '../../css/k/k5ih0_0mc.css';
import '../../css/s/s8kbgpgdk.css';
import '../../css/o/ov3tkdq0e.css';
import '../../css/b/bljw2gqcg.css';
import '../../css/a/ael9jebrv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v9qodcbbj"/><path class="mjb1qruym"/><path class="y80kb3pzy"/><path class="hvmli08jr"/><path class="d-_7qwbfg"/><path class="kdky4fbik"/><path class="xkttnv7bf"/><path class="ud9hs1w1v"/><path class="k5ih0_0mc"/><path class="s8kbgpgdk"/><path class="ov3tkdq0e"/><path class="bljw2gqcg"/><path class="ael9jebrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-bowing-medium-light"} {...others} />);
}

export default Component;
