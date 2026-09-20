import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh5y-abqu.css';
import '../../css/q/q07hktb8w.css';
import '../../css/z/z--x9ywsg.css';
import '../../css/k/k28bzfb1z.css';
import '../../css/l/l_xqixbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rh5y-abqu"/><path class="q07hktb8w"/><path class="z--x9ywsg"/><path class="k28bzfb1z"/><path class="l_xqixbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:make-up-mirror-1"} {...others} />);
}

export default Component;
