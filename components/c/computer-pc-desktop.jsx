import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nwc-i49rl.css';
import '../../css/w/wid4-9w2a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nwc-i49rl"/><path class="wid4-9w2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:computer-pc-desktop"} {...others} />);
}

export default Component;
