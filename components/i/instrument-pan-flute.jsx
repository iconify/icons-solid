import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x5alcsbwc.css';
import '../../css/b/b5pj584wn.css';
import '../../css/z/znnta9z6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x5alcsbwc"/><path class="b5pj584wn"/><path class="znnta9z6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instrument-pan-flute"} {...others} />);
}

export default Component;
