import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bnipcdcfx.css';
import '../../css/y/yyxigpbom.css';
import '../../css/j/j_71fjx8n.css';
import '../../css/c/chjhz7bze.css';
import '../../css/h/h30by4xle.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="bnipcdcfx"/><path class="yyxigpbom"/><path class="j_71fjx8n"/><path class="chjhz7bze"/><circle class="h30by4xle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:led-diode"} {...others} />);
}

export default Component;
