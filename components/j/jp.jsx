import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/p/pub-fjbzw.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="l88qm1qag"/><circle class="pub-fjbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:jp"} {...others} />);
}

export default Component;
