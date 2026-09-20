import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h43et86rz.css';
import '../../css/m/mq-3k5neh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h43et86rz"/><path class="mq-3k5neh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:receipt-turkish-lira"} {...others} />);
}

export default Component;
