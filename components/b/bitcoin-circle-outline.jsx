import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b-rlo5b7p.css';
import '../../css/f/fdey14qly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="b-rlo5b7p"/><path class="fdey14qly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bitcoin-circle-outline"} {...others} />);
}

export default Component;
