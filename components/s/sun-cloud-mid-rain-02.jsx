import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vl0fp_s-i.css';
import '../../css/c/cns1e8f3x.css';
import '../../css/o/osfo8-b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vl0fp_s-i"/><path class="cns1e8f3x"/><path class="osfo8-b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-mid-rain-02"} {...others} />);
}

export default Component;
