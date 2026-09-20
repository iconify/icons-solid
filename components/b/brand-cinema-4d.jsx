import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xphslqu-l.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/w/wgk755bdq.css';
import '../../css/l/lut-b53cg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xphslqu-l"/><path class="j7qjn6psg"/><path class="wgk755bdq"/><path class="lut-b53cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-cinema-4d"} {...others} />);
}

export default Component;
