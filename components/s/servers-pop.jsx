import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/k/kjb578ykn.css';
import '../../css/r/rgfvgzbxn.css';
import '../../css/s/smcf6modk.css';
import '../../css/m/mow10w10r.css';
import '../../css/i/i_h8el0-z.css';
import '../../css/j/jq6bumdhw.css';
import '../../css/r/rezomsbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="kjb578ykn"/><path class="rgfvgzbxn"/><path class="smcf6modk"/><path class="mow10w10r"/><path class="i_h8el0-z"/><path class="jq6bumdhw"/><path class="rezomsbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:servers-pop"} {...others} />);
}

export default Component;
