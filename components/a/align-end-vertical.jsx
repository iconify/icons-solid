import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rknlpibqr.css';
import '../../css/q/q4e1ubcon.css';
import '../../css/l/lcjryzm1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="rknlpibqr"/><rect class="q4e1ubcon"/><path class="lcjryzm1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-end-vertical"} {...others} />);
}

export default Component;
