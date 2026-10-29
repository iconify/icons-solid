import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbucmfbvx.css';
import '../../css/h/h018mf07t.css';
import '../../css/v/vdmplmj1x.css';
import '../../css/b/bacxjnuve.css';
import '../../css/k/k09ywfb9b.css';
import '../../css/p/pk9n63rik.css';
import '../../css/t/tl_jwpb8m.css';
import '../../css/f/fs2d-rbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fbucmfbvx wm-k"/><path class="h018mf07t wm-k"/><path class="vdmplmj1x wm-k"/><path class="bacxjnuve wm-shine"/><path class="k09ywfb9b wm-a"/><path class="pk9n63rik wm-a"/><path class="tl_jwpb8m wm-a"/><path class="fs2d-rbtq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:wrap-text"} {...others} />);
}

export default Component;
