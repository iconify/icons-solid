import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/l/lc3kdubbj.css';
import '../../css/f/fjgxjac4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="arrow-right-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="lc3kdubbj"/><path class="fjgxjac4r"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-right-circle-outline"} {...others} />);
}

export default Component;
