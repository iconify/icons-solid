import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p5aswobnw.css';
import '../../css/w/w0e46ufpc.css';
import '../../css/j/j-mlh2z9t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p5aswobnw"/><path class="w0e46ufpc"/><path class="j-mlh2z9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:webcam"} {...others} />);
}

export default Component;
