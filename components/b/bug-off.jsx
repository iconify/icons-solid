import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g4qkgrbvt.css';
import '../../css/g/gv3abybbi.css';
import '../../css/i/i627o28tt.css';
import '../../css/s/si_tpob_t.css';
import '../../css/f/fnn8ynp6r.css';
import '../../css/o/odn9ehbqj.css';
import '../../css/z/z3vmryb4n.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/s/sw__cecuh.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="g4qkgrbvt wm-shadow"/><path class="gv3abybbi"/><path class="i627o28tt"/><path class="si_tpob_t"/><path class="fnn8ynp6r"/><path class="odn9ehbqj"/><path class="z3vmryb4n"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="sw__cecuh wm-s"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bug-off"} {...others} />);
}

export default Component;
