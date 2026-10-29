import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qk11bvl.css';
import '../../css/g/gvgnzkbfz.css';
import '../../css/f/f4hzekbll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z5qk11bvl"/><path class="gvgnzkbfz wm-k"/><path class="f4hzekbll wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sigma"} {...others} />);
}

export default Component;
