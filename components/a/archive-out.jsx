import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7s5mac7j.css';
import '../../css/q/qkrf_2t-k.css';
import '../../css/k/ksiqod6sg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.23 21.28)" class="j7s5mac7j"/><rect transform="matrix(0 -1 -1 0 22.23 21.28)" class="qkrf_2t-k"/><path class="ksiqod6sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:archive-out"} {...others} />);
}

export default Component;
