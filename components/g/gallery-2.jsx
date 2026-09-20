import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xjb_7qblo.css';
import '../../css/d/ddt6ntblg.css';
import '../../css/u/ubm2t3byj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xjb_7qblo"/><path class="ddt6ntblg"/><path class="ubm2t3byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:gallery-2"} {...others} />);
}

export default Component;
