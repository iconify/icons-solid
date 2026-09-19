import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/i/i0xmk6bak.css';
import '../../css/y/y0hfc6mek.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="i0xmk6bak"/><path class="y0hfc6mek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:creation-date-sort"} {...others} />);
}

export default Component;
