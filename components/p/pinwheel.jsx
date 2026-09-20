import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/adh-lza7k.css';
import '../../css/c/ctf2w3cdb.css';
import '../../css/r/rntw34bgv.css';
import '../../css/f/fa1idfhbt.css';
import '../../css/p/p1bz1fb4w.css';
import '../../css/e/es-k489mn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="adh-lza7k"/><path class="ctf2w3cdb"/><path class="rntw34bgv"/><path class="fa1idfhbt"/><path class="p1bz1fb4w"/><path class="es-k489mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pinwheel"} {...others} />);
}

export default Component;
