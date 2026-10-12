import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cal32lbgc.css';
import '../../css/r/rgggbcbui.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/j/j-6jq5b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cal32lbgc"/><path class="rgggbcbui"/><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="j-6jq5b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-user-round-duotone"} {...others} />);
}

export default Component;
