import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dy2gz5bvt.css';
import '../../css/o/oyp8_-8lt.css';
import '../../css/y/ysui1v1xg.css';
import '../../css/o/og6cnnb8h.css';
import '../../css/y/yoe19r-8e.css';
import '../../css/s/swrog6hby.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dy2gz5bvt"/><path class="oyp8_-8lt"/><path class="ysui1v1xg"/><path class="og6cnnb8h"/><path class="yoe19r-8e"/><path class="swrog6hby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:padlock-key"} {...others} />);
}

export default Component;
