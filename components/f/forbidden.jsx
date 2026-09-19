import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f8mualbjk.css';
import '../../css/z/z2gyqt3jv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="f8mualbjk"/><path class="z2gyqt3jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:forbidden"} {...others} />);
}

export default Component;
