import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h1qs9futx.css';
import '../../css/p/p68a1syir.css';
import '../../css/u/umkcc8owe.css';
import '../../css/u/um581yjdr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h1qs9futx"/><path class="p68a1syir"/><path class="umkcc8owe"/><path class="um581yjdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:thermometer"} {...others} />);
}

export default Component;
