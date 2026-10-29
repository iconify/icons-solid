import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/guvl-odao.css';
import '../../css/j/j1-_55gsu.css';
import '../../css/e/eqiyg6bwe.css';
import '../../css/x/xqfj8re5d.css';
import '../../css/h/htl2wfbig.css';
import '../../css/q/qx1_wdfox.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="guvl-odao wm-shadow"/><path class="j1-_55gsu"/><path class="eqiyg6bwe"/><path class="xqfj8re5d"/><path class="htl2wfbig"/><path class="qx1_wdfox wm-shine"/><path class="r186s1bzo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:candy"} {...others} />);
}

export default Component;
