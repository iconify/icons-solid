import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pfx1_8bah.css';
import '../../css/d/dh3dtccec.css';
import '../../css/r/rbei8w67d.css';
import '../../css/s/s-gvs1k9j.css';
import '../../css/r/r9suhibqj.css';
import '../../css/t/tutdjebrm.css';
import '../../css/w/w8gc-2bsb.css';
import '../../css/a/aeg9xo_8e.css';
import '../../css/o/o9x4t6hzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pfx1_8bah wm-shadow"/><path class="dh3dtccec wm-s"/><path class="rbei8w67d wm-shadow"/><path class="s-gvs1k9j"/><path class="r9suhibqj"/><path class="tutdjebrm"/><path class="w8gc-2bsb wm-s"/><path class="aeg9xo_8e wm-s"/><path class="o9x4t6hzj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:monitor-smartphone"} {...others} />);
}

export default Component;
