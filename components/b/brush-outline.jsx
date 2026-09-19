import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d3jp07bla.css';
import '../../css/f/fnlvv-bya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="d3jp07bla"/><path class="fnlvv-bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:brush-outline"} {...others} />);
}

export default Component;
