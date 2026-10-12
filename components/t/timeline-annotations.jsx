import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxc5jkdys.css';
import '../../css/e/erprbzwkx.css';
import '../../css/s/swjd-ctvi.css';
import '../../css/i/ihxq05bkx.css';
import '../../css/o/o1en9sb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(-90 12 18.4)" class="dxc5jkdys"/><circle transform="rotate(-90 12 18.4)" class="erprbzwkx"/><path class="swjd-ctvi"/><path class="ihxq05bkx"/><path class="o1en9sb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timeline-annotations"} {...others} />);
}

export default Component;
