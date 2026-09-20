import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnswelb8g.css';
import '../../css/o/offerif8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mnswelb8g"/><path class="offerif8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-turkish-lira"} {...others} />);
}

export default Component;
