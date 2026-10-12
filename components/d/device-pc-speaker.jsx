import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2sbfsb9z.css';
import '../../css/y/yqsxyz2pv.css';
import '../../css/u/u7wrczomy.css';
import '../../css/e/e7rohvbas.css';
import '../../css/n/nq1iur8tg.css';
import '../../css/s/sjtplc5wr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t2sbfsb9z"/><circle transform="rotate(90 17.17 14.12)" class="yqsxyz2pv"/><path class="u7wrczomy"/><rect class="e7rohvbas"/><circle class="nq1iur8tg"/><path class="sjtplc5wr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-speaker"} {...others} />);
}

export default Component;
