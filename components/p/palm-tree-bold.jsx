import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roedgmbao.css';
import '../../css/c/coskslbmy.css';
import '../../css/t/t2jllsy6y.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="roedgmbao"/><path class="coskslbmy"/><path class="t2jllsy6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palm-tree-bold"} {...others} />);
}

export default Component;
