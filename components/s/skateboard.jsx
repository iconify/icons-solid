import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1ns8nbeg.css';
import '../../css/t/t63j1rbwi.css';
import '../../css/i/ic1sxvw3g.css';
import '../../css/z/zlcqyybkr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="u1ns8nbeg"/><path class="t63j1rbwi"/><path class="ic1sxvw3g"/><path clip-rule="evenodd" class="zlcqyybkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:skateboard"} {...others} />);
}

export default Component;
