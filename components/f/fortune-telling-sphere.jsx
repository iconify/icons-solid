import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rctplz-1d.css';
import '../../css/h/hajx-1bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rctplz-1d"/><path class="hajx-1bjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:fortune-telling-sphere"} {...others} />);
}

export default Component;
