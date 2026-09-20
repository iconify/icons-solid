import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ozcunh4jb.css';
import '../../css/j/jfm8_1bby.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ozcunh4jb"/><path class="jfm8_1bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:toast"} {...others} />);
}

export default Component;
