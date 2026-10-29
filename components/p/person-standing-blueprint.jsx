import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b1hnuwbzm.css';
import '../../css/a/arn6ufbls.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/n/nd14wkb4e.css';
import '../../css/x/xk6eoibzj.css';
import '../../css/h/h6o8vv3vu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b1hnuwbzm wm-deco"/><path class="arn6ufbls wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="nd14wkb4e wm-k"/><path class="wm-a xk6eoibzj"/><path class="h6o8vv3vu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-standing-blueprint"} {...others} />);
}

export default Component;
