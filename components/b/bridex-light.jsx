import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r97e9btqh.css';
import '../../css/f/fyb5rxb6o.css';
import '../../css/a/ainftcntr.css';
import '../../css/p/po51nbcgo.css';
import '../../css/l/lobinovmv.css';
import '../../css/i/i1ut73yyc.css';
import '../../css/c/cr439-bfy.css';
import '../../css/o/ofkxnxeoj.css';

const viewBox = {"width":100,"height":100};
const content = `<defs><mask id="SVGyUyUMbkP"><path class="r97e9btqh"/><path class="fyb5rxb6o"/><path class="ainftcntr"/><path class="po51nbcgo"/><path class="lobinovmv"/></mask></defs><g mask="url(#SVGyUyUMbkP)" class="i1ut73yyc"><rect class="cr439-bfy"/><rect class="ofkxnxeoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bridex-light"} {...others} />);
}

export default Component;
