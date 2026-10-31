import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/d/djlv7xbdj.css';
import '../../css/n/nbxvyjb9e.css';
import '../../css/g/gyvuiliib.css';
import '../../css/i/ifpvq0b9y.css';
import '../../css/i/i0d46btni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="djlv7xbdj"/><path class="nbxvyjb9e"/><path class="gyvuiliib"/><path class="ifpvq0b9y"/><path class="i0d46btni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:square-x"} {...others} />);
}

export default Component;
