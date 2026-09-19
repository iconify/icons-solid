import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/y/ytkds-bxy.css';
import '../../css/a/adhpfulyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="arrow-down-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="ytkds-bxy"/><path class="adhpfulyb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-down-circle-outline"} {...others} />);
}

export default Component;
