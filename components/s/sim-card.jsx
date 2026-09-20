import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cr_k_qy7u.css';
import '../../css/q/qtsvlnboq.css';
import '../../css/c/ct-l50bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cr_k_qy7u"/><path class="qtsvlnboq"/><path class="ct-l50bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sim-card"} {...others} />);
}

export default Component;
