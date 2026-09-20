import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i7tq9lf8s.css';
import '../../css/o/onqqh0b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i7tq9lf8s"/><path class="onqqh0b5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:receipt-indian-rupee"} {...others} />);
}

export default Component;
