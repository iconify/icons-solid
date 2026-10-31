import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/elh4ujh5z.css';
import '../../css/w/wpnud54cj.css';
import '../../css/r/rptzhnlxa.css';
import '../../css/b/b2bgwkbei.css';
import '../../css/n/nn7rqpb2r.css';
import '../../css/g/gpy20etub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="elh4ujh5z wm-shadow"/><path class="wpnud54cj"/><path class="rptzhnlxa"/><path class="b2bgwkbei"/><path class="nn7rqpb2r"/><path class="gpy20etub wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:screen-share"} {...others} />);
}

export default Component;
