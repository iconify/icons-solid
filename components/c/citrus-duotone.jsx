import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzxqgcawr.css';
import '../../css/j/j_r5lpy0i.css';
import '../../css/c/c3dx5xbhi.css';
import '../../css/q/qa_5jacjg.css';
import '../../css/c/cy_2ifqzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hzxqgcawr"/><path class="j_r5lpy0i"/><path class="c3dx5xbhi"/><path class="qa_5jacjg"/><path class="cy_2ifqzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:citrus-duotone"} {...others} />);
}

export default Component;
