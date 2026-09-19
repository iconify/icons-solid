import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pla2dab5a.css';
import '../../css/b/bkn4clyuz.css';
import '../../css/x/xj-p88xil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pla2dab5a"/><path class="bkn4clyuz"/><path class="xj-p88xil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:investigation"} {...others} />);
}

export default Component;
