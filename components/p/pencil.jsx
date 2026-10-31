import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oyfnvpbby.css';
import '../../css/n/ns_h8cc3w.css';
import '../../css/j/jy8aa6zrm.css';
import '../../css/n/n__74pb6t.css';
import '../../css/o/oy16wm8nc.css';
import '../../css/e/egb5y1bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oyfnvpbby wm-shadow"/><path class="ns_h8cc3w"/><path class="jy8aa6zrm"/><path class="n__74pb6t"/><path class="oy16wm8nc"/><path class="egb5y1bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pencil"} {...others} />);
}

export default Component;
