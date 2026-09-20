import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jq_ooubgw.css';
import '../../css/u/u2g21000b.css';
import '../../css/b/b7bwlofub.css';
import '../../css/x/xnva-811c.css';
import '../../css/h/h-e294bbe.css';
import '../../css/y/yukwhiq5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="jq_ooubgw"/><path class="u2g21000b"/></g><path class="b7bwlofub"/><path class="xnva-811c"/><path class="h-e294bbe"/><path class="yukwhiq5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-bold-duotone"} {...others} />);
}

export default Component;
