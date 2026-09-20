import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/e3al30b2d.css';
import '../../css/u/ubx-5dmjv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="e3al30b2d"/><path class="ubx-5dmjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:zoom-in"} {...others} />);
}

export default Component;
