import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oywfrbclt.css';
import '../../css/e/e-xc5vc_n.css';
import '../../css/u/umc5mob6m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="oywfrbclt"/><path class="e-xc5vc_n"/><path class="umc5mob6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:toothbrush"} {...others} />);
}

export default Component;
