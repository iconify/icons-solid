import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdmgm25pw.css';
import '../../css/z/z7cyubboc.css';
import '../../css/p/po49iib2j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cdmgm25pw"/><path class="z7cyubboc"/><path class="po49iib2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clipboard-duo"} {...others} />);
}

export default Component;
