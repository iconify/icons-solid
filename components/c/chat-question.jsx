import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_5yx_b2v.css';
import '../../css/w/wu23-3bwn.css';
import '../../css/o/obkdnvb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h_5yx_b2v"/><path class="wu23-3bwn"/><circle class="obkdnvb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:chat-question"} {...others} />);
}

export default Component;
