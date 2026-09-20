import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz_1252xr.css';
import '../../css/o/ob96or34g.css';
import '../../css/h/hsh8eosbs.css';
import '../../css/o/oq92ix4yp.css';
import '../../css/e/ed76xxe-l.css';
import '../../css/i/itl748bnl.css';
import '../../css/g/gdlzvwbrq.css';
import '../../css/e/e-t7yp20u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz_1252xr"/><path class="ob96or34g"/><path class="hsh8eosbs"/><path class="oq92ix4yp"/><path class="ed76xxe-l"/><path class="itl748bnl"/><path class="gdlzvwbrq"/><path class="e-t7yp20u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vela"} {...others} />);
}

export default Component;
