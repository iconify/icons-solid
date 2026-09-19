import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2j1lr8fy.css';
import '../../css/k/kb76wyfeg.css';
import '../../css/k/kwz1j7bdg.css';
import '../../css/t/txgz9c5yh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f2j1lr8fy"/><path clip-rule="evenodd" class="kb76wyfeg"/><path class="kwz1j7bdg"/><path clip-rule="evenodd" class="txgz9c5yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:calculator-outline"} {...others} />);
}

export default Component;
