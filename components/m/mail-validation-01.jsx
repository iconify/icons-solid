import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fkpmv0bwm.css';
import '../../css/v/vrcpdj3pt.css';
import '../../css/p/p5xrhsb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fkpmv0bwm"/><path class="vrcpdj3pt"/><path class="p5xrhsb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-validation-01"} {...others} />);
}

export default Component;
