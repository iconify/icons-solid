import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zls1_oujj.css';
import '../../css/v/vayd_bcgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="zls1_oujj"/><path class="vayd_bcgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:google-maps"} {...others} />);
}

export default Component;
