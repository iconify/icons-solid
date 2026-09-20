import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/aj7ls7_-n.css';
import '../../css/l/lb2nr-bwd.css';
import '../../css/d/dyrcd-bsw.css';
import '../../css/s/s_z26hb9j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="aj7ls7_-n"/><path class="lb2nr-bwd"/></g><path clip-rule="evenodd" class="dyrcd-bsw"/><path class="s_z26hb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:speaker-low-off"} {...others} />);
}

export default Component;
