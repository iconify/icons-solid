import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g6-yw9fpp.css';
import '../../css/f/f0-5odbhv.css';
import '../../css/p/prkny4bho.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="g6-yw9fpp"/><path class="f0-5odbhv"/><path class="prkny4bho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:basket"} {...others} />);
}

export default Component;
