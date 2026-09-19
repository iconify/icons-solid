import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nr9qosbpk.css';
import '../../css/w/wxxouib_y.css';
import '../../css/k/kg1i0slxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nr9qosbpk"/><path class="wxxouib_y"/><path class="kg1i0slxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stethoscope-02"} {...others} />);
}

export default Component;
