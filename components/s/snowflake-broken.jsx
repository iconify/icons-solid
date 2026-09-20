import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/txk6dwbhy.css';
import '../../css/z/zipqmpboj.css';
import '../../css/n/nlvmx70rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="txk6dwbhy"/><path class="zipqmpboj"/><path class="nlvmx70rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:snowflake-broken"} {...others} />);
}

export default Component;
