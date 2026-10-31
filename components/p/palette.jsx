import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fusj4ccsm.css';
import '../../css/y/ys0tztb2u.css';
import '../../css/g/gg5v6eipu.css';
import '../../css/o/or693yu9a.css';
import '../../css/r/r-tfq900y.css';
import '../../css/g/g88h76kxn.css';
import '../../css/p/p7yfd71fn.css';
import '../../css/d/d7el_bb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fusj4ccsm"/><path class="ys0tztb2u"/><path class="gg5v6eipu wm-shine"/><path class="or693yu9a wm-k"/><path class="r-tfq900y wm-a"/><path class="g88h76kxn"/><path class="p7yfd71fn"/><path class="d7el_bb6b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:palette"} {...others} />);
}

export default Component;
