import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk9dbib7n.css';
import '../../css/x/xjguwe2_c.css';
import '../../css/s/s51lqybrs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gk9dbib7n"/><path class="xjguwe2_c"/><path class="s51lqybrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hierarchy-2"} {...others} />);
}

export default Component;
