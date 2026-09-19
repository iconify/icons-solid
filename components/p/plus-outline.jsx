import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ojh9awbdp.css';
import '../../css/t/t3q1ykbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="plus-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ojh9awbdp"/><path class="t3q1ykbbo"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:plus-outline"} {...others} />);
}

export default Component;
