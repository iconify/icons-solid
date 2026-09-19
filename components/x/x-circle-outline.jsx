import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/h/ho8w70bzl.css';
import '../../css/g/g5yg_8b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="x-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="ho8w70bzl"/><path class="g5yg_8b0m"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:x-circle-outline"} {...others} />);
}

export default Component;
