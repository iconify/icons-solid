import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/y/y1vozvbfu.css';
import '../../css/y/yd3ehi65n.css';
import '../../css/p/pzsftcc0a.css';
import '../../css/n/nunuehb6x.css';
import '../../css/r/r3w82youn.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/o/oyohumbxo.css';
import '../../css/h/hogk0_7wp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="y1vozvbfu"/><circle class="yd3ehi65n"/><path class="pzsftcc0a"/><path class="nunuehb6x"/><path class="r3w82youn"/><g class="c-zrgpb5l"><path class="oyohumbxo"/><path class="hogk0_7wp"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-grenada"} {...others} />);
}

export default Component;
