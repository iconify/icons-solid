import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gng9uo35b.css';
import '../../css/e/e648ybc7c.css';
import '../../css/c/ce7nwidet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="gng9uo35b"/><path clip-rule="evenodd" class="e648ybc7c"/><path class="ce7nwidet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:miner-outline"} {...others} />);
}

export default Component;
