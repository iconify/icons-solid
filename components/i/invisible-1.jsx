import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/dif-_vbst.css';
import '../../css/a/af8wwtblo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="dif-_vbst"/><path class="af8wwtblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:invisible-1"} {...others} />);
}

export default Component;
