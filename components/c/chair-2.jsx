import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mpvhkmbgv.css';
import '../../css/i/igszbab5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mpvhkmbgv"/><path class="igszbab5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chair-2"} {...others} />);
}

export default Component;
