import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksntg5bby.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i59-8zbak.css';
import '../../css/u/uz85sjvru.css';
import '../../css/a/a6vtm2nyb.css';
import '../../css/m/memn3xbdy.css';
import '../../css/c/c4zkbo2em.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksntg5bby secondary"/><g class="dt0cm9dhy primary"><path class="i59-8zbak"/><path class="uz85sjvru"/><path class="a6vtm2nyb"/><path class="memn3xbdy"/><path class="c4zkbo2em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trophy-duo"} {...others} />);
}

export default Component;
