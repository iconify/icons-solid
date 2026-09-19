import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kod9bhbbs.css';
import '../../css/l/lngrxjb-x.css';
import '../../css/o/oqzecobzo.css';
import '../../css/l/l-crnq6jw.css';
import '../../css/y/y2s704hzi.css';
import '../../css/n/n60estbrf.css';
import '../../css/p/pkpz2qb5l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kod9bhbbs"/><path class="lngrxjb-x"/><path class="oqzecobzo"/><path class="l-crnq6jw"/><ellipse transform="rotate(-32.567 301.337 191.289)" class="y2s704hzi"/><path class="n60estbrf"/><path class="pkpz2qb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:loudspeaker"} {...others} />);
}

export default Component;
