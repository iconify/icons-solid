import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asdc_-oox.css';
import '../../css/d/dxmn46ytv.css';
import '../../css/j/jjr19d3zu.css';
import '../../css/l/lzdivjfpa.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="asdc_-oox wm-k"/><path class="dxmn46ytv wm-shine"/><path class="jjr19d3zu wm-shine"/><path class="lzdivjfpa wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:folder-search"} {...others} />);
}

export default Component;
