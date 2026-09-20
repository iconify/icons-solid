import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j-ptpwbrg.css';
import '../../css/n/n47ojwbqw.css';
import '../../css/q/q189_o4mw.css';
import '../../css/r/rda-3cd8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j-ptpwbrg"/><path class="n47ojwbqw"/><path class="q189_o4mw"/><path class="rda-3cd8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:e-commerce-online-shop"} {...others} />);
}

export default Component;
