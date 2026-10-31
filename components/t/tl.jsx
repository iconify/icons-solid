import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxo1rzbps.css';
import '../../css/p/pt-1ib6kt.css';
import '../../css/o/o-cne-k-k.css';
import '../../css/j/jn737pbse.css';

const viewBox = {"width":300,"height":150};
const content = `<g class="ft5dv1b6b"><path class="uxo1rzbps"/><path class="pt-1ib6kt"/><path class="o-cne-k-k"/><path class="jn737pbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tl"} {...others} />);
}

export default Component;
