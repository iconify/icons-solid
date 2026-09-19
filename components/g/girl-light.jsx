import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4vb340_r.css';
import '../../css/w/w_iqzkb4k.css';
import '../../css/m/mr_v-jb5i.css';
import '../../css/i/i-08jobls.css';
import '../../css/j/jossojbwn.css';
import '../../css/f/fp6tafhhd.css';
import '../../css/w/w7csgiq-v.css';
import '../../css/z/zjo4x--px.css';
import '../../css/u/u14nj_oky.css';
import '../../css/z/zv1fsm-om.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x4vb340_r"/><path class="w_iqzkb4k"/><path class="mr_v-jb5i"/><path class="i-08jobls"/><path class="jossojbwn"/><path class="fp6tafhhd"/><path class="w7csgiq-v"/><path class="zjo4x--px"/><path class="u14nj_oky"/><path class="zv1fsm-om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:girl-light"} {...others} />);
}

export default Component;
