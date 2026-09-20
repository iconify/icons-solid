import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v-q54ztnr.css';
import '../../css/q/qqub6hb-t.css';
import '../../css/d/dln8ziysl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="v-q54ztnr"/><path class="qqub6hb-t"/><path class="dln8ziysl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:3d-rotate-1"} {...others} />);
}

export default Component;
