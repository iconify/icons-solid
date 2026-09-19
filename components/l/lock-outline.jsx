import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s_a8gd0ao.css';
import '../../css/e/e484agbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="s_a8gd0ao"/><path class="e484agbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:lock-outline"} {...others} />);
}

export default Component;
