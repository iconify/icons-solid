import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tdzmnstxh.css';
import '../../css/y/y0wdu3bmq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="tdzmnstxh"/><path clip-rule="evenodd" class="y0wdu3bmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-podcast"} {...others} />);
}

export default Component;
