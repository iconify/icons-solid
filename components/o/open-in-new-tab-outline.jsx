import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c70_fn3nn.css';
import '../../css/k/kij-g2bws.css';
import '../../css/q/qvt3ffkzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="open-in-new-tab-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="c70_fn3nn"/><path class="kij-g2bws"/><path class="qvt3ffkzs"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:open-in-new-tab-outline"} {...others} />);
}

export default Component;
