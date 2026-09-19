import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfohozb5l.css';
import '../../css/l/lgbgb0bfw.css';
import '../../css/h/h6pzj7b_t.css';
import '../../css/i/i-08jobls.css';
import '../../css/g/gqt4xf-oi.css';
import '../../css/f/fp6tafhhd.css';
import '../../css/w/w7csgiq-v.css';
import '../../css/z/zjo4x--px.css';
import '../../css/u/u14nj_oky.css';
import '../../css/p/phu-4vbhb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zfohozb5l"/><path class="lgbgb0bfw"/><path class="h6pzj7b_t"/><path class="i-08jobls"/><path class="gqt4xf-oi"/><path class="fp6tafhhd"/><path class="w7csgiq-v"/><path class="zjo4x--px"/><path class="u14nj_oky"/><path class="phu-4vbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:girl"} {...others} />);
}

export default Component;
