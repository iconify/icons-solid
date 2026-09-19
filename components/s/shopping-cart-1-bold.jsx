import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2n266bru.css';
import '../../css/m/m1tji20nr.css';
import '../../css/q/qhg7eq7ou.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j2n266bru"/><path class="m1tji20nr"/><path class="qhg7eq7ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-cart-1-bold"} {...others} />);
}

export default Component;
