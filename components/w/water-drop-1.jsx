import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g_bgizbmz.css';
import '../../css/d/d53i9pblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g_bgizbmz"/><path class="d53i9pblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:water-drop-1"} {...others} />);
}

export default Component;
