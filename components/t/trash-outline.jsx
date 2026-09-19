import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tq2xafack.css';
import '../../css/z/zwag25jea.css';
import '../../css/k/kcveuv76y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="trash-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tq2xafack"/><path class="zwag25jea"/><path class="kcveuv76y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:trash-outline"} {...others} />);
}

export default Component;
