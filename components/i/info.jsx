import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nedktqbjv.css';
import '../../css/r/rayd42qzh.css';
import '../../css/h/h88-h-uwe.css';
import '../../css/j/j8diwbuaf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nedktqbjv"/><path clip-rule="evenodd" class="rayd42qzh"/><path class="h88-h-uwe"/><path class="j8diwbuaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:info"} {...others} />);
}

export default Component;
