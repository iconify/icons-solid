import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l75ci21bu.css';
import '../../css/z/zs3xofr3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="l75ci21bu"/><path class="zs3xofr3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:megaphone-refresh"} {...others} />);
}

export default Component;
