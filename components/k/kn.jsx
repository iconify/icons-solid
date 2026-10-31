import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7vmrehhn.css';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d7oj729hq.css';
import '../../css/f/f40_z7b4u.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/i3v58jv3e.css';
import '../../css/j/jubc6kbdo.css';
import '../../css/b/bzsyrbcao.css';

const viewBox = {"width":301,"height":201};
const content = `<defs><path id="SVGkcWd1cFQ" class="r7vmrehhn"/></defs><g class="bi12bsetm"><path class="d7oj729hq"/><path class="f40_z7b4u"/><mask id="SVGh85JgdhO" class="n1mjunbsu"><use href="#SVGkcWd1cFQ"/></mask><path mask="url(#SVGh85JgdhO)" class="i3v58jv3e"/><path mask="url(#SVGh85JgdhO)" class="jubc6kbdo"/><path class="bzsyrbcao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:kn"} {...others} />);
}

export default Component;
