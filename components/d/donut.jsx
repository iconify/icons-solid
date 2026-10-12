import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ml2tjfbhe.css';
import '../../css/t/tpr-u5v4f.css';
import '../../css/c/c8jvjcb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ml2tjfbhe"/><path class="tpr-u5v4f"/><path class="c8jvjcb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:donut"} {...others} />);
}

export default Component;
