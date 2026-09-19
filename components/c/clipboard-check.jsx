import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsw262b-n.css';
import '../../css/i/iti8b_hwb.css';
import '../../css/e/e4rjz7l1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nsw262b-n"/><path class="iti8b_hwb"/><path class="e4rjz7l1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard-check"} {...others} />);
}

export default Component;
