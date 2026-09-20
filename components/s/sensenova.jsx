import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f74-c9bya.css';
import '../../css/x/x0niscc9w.css';
import '../../css/t/tib8tkbmc.css';
import '../../css/y/y980iw13s.css';
import '../../css/a/a8y_7abhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="f74-c9bya"/><path class="x0niscc9w"/><path class="tib8tkbmc"/><path class="y980iw13s"/><path class="a8y_7abhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:sensenova"} {...others} />);
}

export default Component;
