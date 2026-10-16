import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvmoh1c1p.css';
import '../../css/l/ls412dxod.css';
import '../../css/m/mz84-97ww.css';
import '../../css/w/wo9j9qbco.css';
import '../../css/j/jw-lm3hjl.css';
import '../../css/p/p9z0f-b9r.css';
import '../../css/b/brpnwhteb.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvmoh1c1p"/><path class="ls412dxod"/><path class="mz84-97ww"/><path class="wo9j9qbco"/><path class="jw-lm3hjl"/><path class="p9z0f-b9r"/><path class="brpnwhteb"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-farm-check-20"} {...others} />);
}

export default Component;
