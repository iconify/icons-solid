import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/o/oqsyrbbws.css';
import '../../css/k/k4-thijeo.css';
import '../../css/s/stlmykn8x.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="oqsyrbbws"/><path class="k4-thijeo"/><path clip-rule="evenodd" class="stlmykn8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:um"} {...others} />);
}

export default Component;
