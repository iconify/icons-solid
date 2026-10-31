import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czlnr725f.css';
import '../../css/t/ta2m91bhh.css';
import '../../css/b/bz4hr1vbk.css';
import '../../css/v/vj072xvwy.css';
import '../../css/b/bx3vsnk7x.css';
import '../../css/h/hkvjkn7po.css';
import '../../css/e/evkl7vb9f.css';
import '../../css/a/a_37b-l4w.css';
import '../../css/a/aknw4ob-t.css';
import '../../css/e/ej_obsbqo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="czlnr725f"/><path class="ta2m91bhh"/><path class="bz4hr1vbk"/><path class="vj072xvwy"/><path class="bx3vsnk7x"/><path class="hkvjkn7po"/><path class="evkl7vb9f"/><path class="a_37b-l4w"/><path class="aknw4ob-t"/><path class="ej_obsbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:truck-front-pop"} {...others} />);
}

export default Component;
