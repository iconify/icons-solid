import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_9p9oa0z.css';
import '../../css/q/q4_p1bc9q.css';
import '../../css/q/qt2qupbcy.css';
import '../../css/f/fr7-38ijj.css';
import '../../css/z/zyrv5-bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 6.27 12.9)" class="c_9p9oa0z"/><circle transform="rotate(90 17.8 17.26)" class="q4_p1bc9q"/><circle transform="rotate(90 6.27 12.9)" class="qt2qupbcy"/><circle transform="rotate(90 17.8 17.26)" class="fr7-38ijj"/><path class="zyrv5-bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cherry"} {...others} />);
}

export default Component;
