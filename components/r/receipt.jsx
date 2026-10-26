import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l-bij6b4a.css';
import '../../css/l/lzz3-ib6p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="l-bij6b4a"/><path class="lzz3-ib6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:receipt"} {...others} />);
}

export default Component;
