import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zbehsk69m.css';
import '../../css/e/evwpmfbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sliders-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="zbehsk69m"/><path class="evwpmfbcj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:sliders-outline"} {...others} />);
}

export default Component;
