import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h192o0bpw.css';
import '../../css/h/h_9pgub4l.css';
import '../../css/b/bui30ldye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h192o0bpw"/><path class="h_9pgub4l"/><path class="bui30ldye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pointers-fill"} {...others} />);
}

export default Component;
