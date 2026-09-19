import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/syqbndbck.css';
import '../../css/z/zdzqnkbnl.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/x/xtsrmvj7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="syqbndbck"/><path class="zdzqnkbnl"/><circle class="fr_tmn9fp"/><circle class="xtsrmvj7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:google-lens"} {...others} />);
}

export default Component;
