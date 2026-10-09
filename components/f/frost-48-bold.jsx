import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf96sx5bv.css';
import '../../css/j/jsd82fbzk.css';
import '../../css/i/i3boj3tqo.css';
import '../../css/g/gbjaqol1l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uf96sx5bv"/><path class="jsd82fbzk"/><path class="i3boj3tqo"/><path class="gbjaqol1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-48-bold"} {...others} />);
}

export default Component;
