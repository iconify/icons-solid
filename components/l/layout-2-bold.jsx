import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/osadutb4f.css';
import '../../css/c/cs3-aebaf.css';
import '../../css/z/znp9c_b1c.css';
import '../../css/l/lehj6_a8s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="osadutb4f"/><rect class="cs3-aebaf"/><rect class="znp9c_b1c"/><rect class="lehj6_a8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layout-2-bold"} {...others} />);
}

export default Component;
