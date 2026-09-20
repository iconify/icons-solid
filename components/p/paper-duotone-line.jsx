import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qix69lb3d.css';
import '../../css/d/dapscsq3i.css';
import '../../css/x/xh-eorwfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qix69lb3d"/><path class="dapscsq3i"/><path class="xh-eorwfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:paper-duotone-line"} {...others} />);
}

export default Component;
