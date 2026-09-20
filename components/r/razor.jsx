import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjav0q0wh.css';
import '../../css/h/h04tw3pgn.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/h/h785c9egx.css';
import '../../css/i/isk0zme7n.css';
import '../../css/a/a9s23ybin.css';
import '../../css/r/rd0tuobyr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sjav0q0wh"/><rect class="h04tw3pgn"/><g class="x8poo_bjf"><path class="h785c9egx"/><rect class="isk0zme7n"/><path class="a9s23ybin"/><path class="rd0tuobyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:razor"} {...others} />);
}

export default Component;
