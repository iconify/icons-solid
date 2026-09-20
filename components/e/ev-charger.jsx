import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwcqp7brd.css';
import '../../css/r/rzc_7sb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gwcqp7brd"/><path class="rzc_7sb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ev-charger"} {...others} />);
}

export default Component;
