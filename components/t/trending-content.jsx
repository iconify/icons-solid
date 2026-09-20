import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n1ij5db0i.css';
import '../../css/y/ypk9v5b6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="n1ij5db0i"/><path class="ypk9v5b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:trending-content"} {...others} />);
}

export default Component;
