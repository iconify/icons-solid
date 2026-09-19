import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jtdcv7bbz.css';
import '../../css/d/d7ig3mx9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="jtdcv7bbz"/><path class="d7ig3mx9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:search-outline"} {...others} />);
}

export default Component;
