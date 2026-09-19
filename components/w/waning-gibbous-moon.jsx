import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpm24ubad.css';
import '../../css/f/f6mv7mqxr.css';
import '../../css/h/hchhgsdmo.css';
import '../../css/e/ed0t9w22n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rpm24ubad"/><path class="f6mv7mqxr"/><path class="hchhgsdmo"/><path class="ed0t9w22n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:waning-gibbous-moon"} {...others} />);
}

export default Component;
