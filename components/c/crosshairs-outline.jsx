import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n574zphyq.css';
import '../../css/j/jx9kr4pbx.css';
import '../../css/t/tvvi5wtmo.css';
import '../../css/n/nzcm26aio.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n574zphyq"/><path class="jx9kr4pbx"/><path class="tvvi5wtmo"/><path class="nzcm26aio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crosshairs-outline"} {...others} />);
}

export default Component;
