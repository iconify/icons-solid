import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m5xii2azq.css';
import '../../css/t/t2y0b9lzj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="m5xii2azq"/><path class="t2y0b9lzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-pin-disabled"} {...others} />);
}

export default Component;
