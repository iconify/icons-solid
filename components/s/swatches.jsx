import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdg-c-y4d.css';
import '../../css/s/s1mvwz1nh.css';
import '../../css/u/ueefvlbmb.css';
import '../../css/r/rp4en8bhr.css';
import '../../css/t/t-fvogbvq.css';
import '../../css/g/g8ayfpbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qdg-c-y4d"/><path class="s1mvwz1nh"/><path class="ueefvlbmb"/><path class="rp4en8bhr"/><path class="t-fvogbvq"/><path class="g8ayfpbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:swatches"} {...others} />);
}

export default Component;
