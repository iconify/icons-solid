import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tubjcdsun.css';
import '../../css/w/wvqiseurq.css';
import '../../css/u/uotc2xkxx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tubjcdsun"/><path clip-rule="evenodd" class="wvqiseurq"/><path class="uotc2xkxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:dollar-bill"} {...others} />);
}

export default Component;
