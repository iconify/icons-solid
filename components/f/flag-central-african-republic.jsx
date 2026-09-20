import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dur0b2p3t.css';
import '../../css/o/o1h-6n3bu.css';
import '../../css/e/eptf0b0sx.css';
import '../../css/m/mfpcb1y7t.css';
import '../../css/h/hd78_0bcy.css';
import '../../css/w/wwop3rbhm.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dur0b2p3t"/><path class="o1h-6n3bu"/><path class="eptf0b0sx"/><path class="mfpcb1y7t"/><path class="hd78_0bcy"/><path class="wwop3rbhm"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-central-african-republic"} {...others} />);
}

export default Component;
