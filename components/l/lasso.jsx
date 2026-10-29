import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ufownhbiy.css';
import '../../css/b/bhahdw5io.css';
import '../../css/n/n3hknr7zi.css';
import '../../css/f/fi2m57bod.css';
import '../../css/q/qqlhlq7iu.css';
import '../../css/f/fmnpmnbyt.css';
import '../../css/d/dewjy2u4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ufownhbiy wm-shadow"/><path class="bhahdw5io"/><path class="n3hknr7zi"/><path class="fi2m57bod"/><path class="qqlhlq7iu"/><path class="fmnpmnbyt"/><path class="dewjy2u4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:lasso"} {...others} />);
}

export default Component;
