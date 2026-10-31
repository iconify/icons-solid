import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zey8rubqr.css';
import '../../css/x/xjsuye19a.css';
import '../../css/m/mf3_dkb4y.css';
import '../../css/g/g052_gijf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zey8rubqr"/><path class="wm-shine xjsuye19a"/><path class="mf3_dkb4y wm-k"/><path class="g052_gijf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fast-forward"} {...others} />);
}

export default Component;
