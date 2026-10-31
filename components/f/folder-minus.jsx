import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/q/qtql_xblt.css';
import '../../css/c/csj-am6vj.css';
import '../../css/x/xyc17sb9x.css';
import '../../css/e/eg979na8x.css';
import '../../css/m/mo9-n4b6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="qtql_xblt"/><path class="csj-am6vj"/><path class="xyc17sb9x"/><path class="eg979na8x"/><path class="mo9-n4b6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-minus"} {...others} />);
}

export default Component;
