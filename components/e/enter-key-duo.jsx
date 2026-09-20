import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/l/l52wioblq.css';
import '../../css/q/qxj1occ1r.css';
import '../../css/l/llc4772za.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="l52wioblq"/><path class="qxj1occ1r"/><path class="llc4772za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:enter-key-duo"} {...others} />);
}

export default Component;
