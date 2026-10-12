import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrn3nmbns.css';
import '../../css/l/l1p3q2bay.css';
import '../../css/l/l-fwh23rz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yrn3nmbns"/><path class="l1p3q2bay"/><path class="l-fwh23rz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:playing-card-duotone"} {...others} />);
}

export default Component;
