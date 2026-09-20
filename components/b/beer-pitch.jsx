import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qh6lv5zbp.css';
import '../../css/j/jmevjtf7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qh6lv5zbp"/><path class="jmevjtf7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:beer-pitch"} {...others} />);
}

export default Component;
