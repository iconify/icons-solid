import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/ql9zaqhxd.css';
import '../../css/q/q3_y4m87i.css';
import '../../css/n/n4i4tkbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="matrix(0 1 1 0 2 8.05)" class="ql9zaqhxd"/><path class="q3_y4m87i"/><path class="n4i4tkbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-360-right"} {...others} />);
}

export default Component;
