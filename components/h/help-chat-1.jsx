import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j13phnf0t.css';
import '../../css/d/dyuy5na4d.css';
import '../../css/b/bgj_1ypuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="j13phnf0t"/><path class="dyuy5na4d"/><path class="bgj_1ypuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:help-chat-1"} {...others} />);
}

export default Component;
