import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ira41xb9p.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/p/pljtn-4ly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><ellipse class="ira41xb9p"/><circle class="hwsal5q-o"/><path class="pljtn-4ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:globe-outline"} {...others} />);
}

export default Component;
