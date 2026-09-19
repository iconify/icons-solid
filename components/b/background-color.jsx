import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbzue-nba.css';
import '../../css/e/ejpwfqbsm.css';
import '../../css/a/af9evjbjc.css';
import '../../css/s/s2i_weftl.css';
import '../../css/d/dgk58nbdy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jbzue-nba"/><path class="ejpwfqbsm"/><path class="af9evjbjc"/><path class="s2i_weftl"/><path class="dgk58nbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:background-color"} {...others} />);
}

export default Component;
