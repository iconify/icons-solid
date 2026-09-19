import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rbbqkwi5y.css';
import '../../css/h/h3wpatyos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="rbbqkwi5y"/><path class="h3wpatyos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:file-outline"} {...others} />);
}

export default Component;
