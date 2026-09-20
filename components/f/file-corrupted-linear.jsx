import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jq66trl3z.css';
import '../../css/t/t7wap_pap.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jq66trl3z"/><path class="t7wap_pap"/><path class="e0cmz0boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-linear"} {...others} />);
}

export default Component;
