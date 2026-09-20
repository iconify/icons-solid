import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/t6z_hx3dj.css';
import '../../css/m/m3lse8uhj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="t6z_hx3dj"/><path clip-rule="evenodd" class="m3lse8uhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-up-4"} {...others} />);
}

export default Component;
