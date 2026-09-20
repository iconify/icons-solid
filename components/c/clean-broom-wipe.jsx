import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zaw36qhly.css';
import '../../css/l/lf8db52xx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zaw36qhly"/><path class="lf8db52xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:clean-broom-wipe"} {...others} />);
}

export default Component;
