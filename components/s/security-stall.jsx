import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hwl4e0bhl.css';
import '../../css/n/nzqwv94kx.css';
import '../../css/s/sdbl3ttsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="hwl4e0bhl"/><path class="nzqwv94kx"/><path class="sdbl3ttsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:security-stall"} {...others} />);
}

export default Component;
