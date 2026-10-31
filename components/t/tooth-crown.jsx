import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vfvahr0go.css';
import '../../css/w/w7582bb1z.css';
import '../../css/n/nfdxm2bpu.css';
import '../../css/o/okm7frrwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vfvahr0go wm-shadow"/><path class="w7582bb1z wm-shadow"/><path class="nfdxm2bpu"/><path class="okm7frrwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tooth-crown"} {...others} />);
}

export default Component;
