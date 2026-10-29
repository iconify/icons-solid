import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dvwannbbz.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/b/biv-r_b9a.css';
import '../../css/y/yk993owos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dvwannbbz"/><path class="qr4ochb5c wm-s"/><path class="biv-r_b9a"/><path class="wm-a yk993owos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-off-duo"} {...others} />);
}

export default Component;
