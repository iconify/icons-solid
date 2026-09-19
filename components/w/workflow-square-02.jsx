import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0hhp-bbf.css';
import '../../css/o/ozpfckvvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q0hhp-bbf"/><path class="ozpfckvvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-02"} {...others} />);
}

export default Component;
