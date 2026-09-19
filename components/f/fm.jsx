import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psj3yyb-w.css';
import '../../css/h/hefx5abkq.css';

const viewBox = {"width":301,"height":159};
const content = `<g class="ft5dv1b6b"><path class="psj3yyb-w"/><path class="hefx5abkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:fm"} {...others} />);
}

export default Component;
