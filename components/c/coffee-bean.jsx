import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k1tjfvb9o.css';
import '../../css/k/km7l-rbnx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="k1tjfvb9o"/><path class="km7l-rbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:coffee-bean"} {...others} />);
}

export default Component;
