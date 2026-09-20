import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/dgsbfbclr.css';
import '../../css/e/e_scokm3d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="dgsbfbclr"/><path class="e_scokm3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:disable-alarm"} {...others} />);
}

export default Component;
