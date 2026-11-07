import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/llmrhkpex.css';
import '../../css/r/r01r-3bes.css';
import '../../css/r/r7eg7804v.css';
import '../../css/o/o8ptejdcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="llmrhkpex"/><path class="r01r-3bes"/><path class="r7eg7804v"/><path class="o8ptejdcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-linear"} {...others} />);
}

export default Component;
