import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyubk9eii.css';
import '../../css/y/yzua0czce.css';
import '../../css/l/ly3ekk8un.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="hyubk9eii"/><path class="yzua0czce"/><path class="ly3ekk8un"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-shrugging"} {...others} />);
}

export default Component;
