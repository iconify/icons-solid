import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3kqyjw5w.css';
import '../../css/z/z2ak80-6h.css';
import '../../css/e/e25t-c6vp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e3kqyjw5w"/><path class="z2ak80-6h"/><path class="e25t-c6vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:record"} {...others} />);
}

export default Component;
