import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f25kf5bbl.css';
import '../../css/u/uy-wxpyub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="f25kf5bbl"/><path class="uy-wxpyub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-shadow"} {...others} />);
}

export default Component;
