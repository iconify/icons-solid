import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/obfzrqope.css';
import '../../css/h/h48xn4b4n.css';
import '../../css/u/u8t73uffw.css';
import '../../css/d/dbq1ikb8j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="obfzrqope"/><path class="h48xn4b4n"/><path class="u8t73uffw"/><path class="dbq1ikb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:magic-wand"} {...others} />);
}

export default Component;
