import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhrvc9bht.css';
import '../../css/u/u41nrdbkf.css';
import '../../css/t/tgt3xormw.css';
import '../../css/f/fuqhztbfi.css';
import '../../css/j/j-tppmb-u.css';
import '../../css/x/xmef_rexv.css';
import '../../css/z/ziea3mbdh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uhrvc9bht"/><path class="u41nrdbkf"/><path class="tgt3xormw"/><path class="fuqhztbfi"/><path class="j-tppmb-u"/><path class="xmef_rexv"/><path class="ziea3mbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cable-car-pop"} {...others} />);
}

export default Component;
