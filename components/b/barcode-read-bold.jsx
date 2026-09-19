import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/s4cl7284p.css';
import '../../css/o/oln1prb6w.css';
import '../../css/u/ubdxevbux.css';
import '../../css/k/ko4f4urva.css';
import '../../css/n/ngb3iwz0p.css';
import '../../css/p/pe6sd5bcq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="s4cl7284p"/><rect class="oln1prb6w"/><rect class="ubdxevbux"/><rect class="ko4f4urva"/><rect class="ngb3iwz0p"/><rect class="pe6sd5bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:barcode-read-bold"} {...others} />);
}

export default Component;
