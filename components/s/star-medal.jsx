import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/efypg13vt.css';
import '../../css/s/s7dh9tb4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="efypg13vt"/><path class="s7dh9tb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:star-medal"} {...others} />);
}

export default Component;
