import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lulau1b0x.css';
import '../../css/f/fgiip1h-x.css';
import '../../css/l/l4nigsmer.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="lulau1b0x"/><path class="fgiip1h-x"/><path class="l4nigsmer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-1"} {...others} />);
}

export default Component;
