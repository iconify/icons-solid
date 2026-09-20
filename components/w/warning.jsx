import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/o/o-wjxl3tj.css';
import '../../css/f/flen3tbdj.css';
import '../../css/r/risxovbta.css';
import '../../css/z/z-9e2yrmd.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVG9i8vndUf" class="n1mjunbsu"><path class="o-wjxl3tj"/></mask><g class="flen3tbdj"><path class="risxovbta"/><path mask="url(#SVG9i8vndUf)" class="z-9e2yrmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:warning"} {...others} />);
}

export default Component;
