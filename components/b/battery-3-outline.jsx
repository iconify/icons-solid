import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_zop_bkd.css';
import '../../css/k/k1u3rdh2l.css';
import '../../css/t/t018kgb2u.css';
import '../../css/w/wa93a239p.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b_zop_bkd"/><path class="k1u3rdh2l"/><path class="t018kgb2u"/><path class="wa93a239p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-3-outline"} {...others} />);
}

export default Component;
