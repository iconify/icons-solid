import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aq0_wmv-j.css';
import '../../css/e/epyea88en.css';
import '../../css/p/p5bavvb-d.css';
import '../../css/k/k4o9pvb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aq0_wmv-j wm-shadow"/><path class="epyea88en wm-shadow"/><path class="p5bavvb-d"/><path class="k4o9pvb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:minimize-2"} {...others} />);
}

export default Component;
