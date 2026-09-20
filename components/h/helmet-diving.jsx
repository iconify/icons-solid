import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3vfxlb5y.css';
import '../../css/r/rus9pebka.css';
import '../../css/d/dq0amqo-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d3vfxlb5y"/><circle class="rus9pebka"/><path class="dq0amqo-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:helmet-diving"} {...others} />);
}

export default Component;
