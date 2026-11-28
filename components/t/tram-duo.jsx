import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdd5_c-6s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/de1sdh_kc.css';
import '../../css/a/at_mvuoky.css';
import '../../css/o/okv086asm.css';
import '../../css/l/lkof9guxz.css';
import '../../css/g/g83zm2etw.css';
import '../../css/r/rwey-0bil.css';
import '../../css/p/ppi4wnv8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdd5_c-6s secondary"/><g class="dt0cm9dhy primary"><path class="de1sdh_kc"/><path class="at_mvuoky"/><path class="okv086asm"/><path class="lkof9guxz"/><path class="g83zm2etw"/><path class="rwey-0bil"/><path class="ppi4wnv8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tram-duo"} {...others} />);
}

export default Component;
