import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ple346boy.css';
import '../../css/h/hcr8znb8b.css';
import '../../css/q/qfgfg6mkm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ple346boy"/><path class="hcr8znb8b"/><ellipse transform="rotate(30 23.477 12.594)" class="qfgfg6mkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:yellow-heart"} {...others} />);
}

export default Component;
