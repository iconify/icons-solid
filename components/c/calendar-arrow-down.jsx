import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qyr7hn1ed.css';
import '../../css/u/u0bla4xmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qyr7hn1ed"/><path class="u0bla4xmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-arrow-down"} {...others} />);
}

export default Component;
