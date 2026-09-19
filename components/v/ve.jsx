import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6opa5bli.css';
import '../../css/m/m36lxmbvf.css';
import '../../css/j/jkij9acfo.css';
import '../../css/i/iwn3hz_ww.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="n6opa5bli"/><path class="m36lxmbvf"/><path class="jkij9acfo"/><path class="iwn3hz_ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ve"} {...others} />);
}

export default Component;
