import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vm-o3nbms.css';
import '../../css/t/tk_3jjl5r.css';
import '../../css/m/m25ahqbcc.css';
import '../../css/m/mm8lkn_5j.css';
import '../../css/d/dxo27vb0f.css';
import '../../css/r/rt-8f3epp.css';
import '../../css/m/mxif30vds.css';
import '../../css/q/qq9qb59mv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vm-o3nbms"/><path class="tk_3jjl5r"/><path class="m25ahqbcc wm-shine"/><path class="mm8lkn_5j wm-k"/><path class="dxo27vb0f wm-a"/><path class="rt-8f3epp"/><path class="mxif30vds"/><path class="qq9qb59mv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mouse"} {...others} />);
}

export default Component;
