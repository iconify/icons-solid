import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hyyx19bjl.css';
import '../../css/w/w9aixnb4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="hyyx19bjl"/><path class="w9aixnb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:horizontally-centered"} {...others} />);
}

export default Component;
