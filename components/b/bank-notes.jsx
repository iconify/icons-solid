import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v89145xor.css';
import '../../css/s/sdjy2ybub.css';
import '../../css/o/ow6hpmbxg.css';
import '../../css/p/pir2u0bwv.css';
import '../../css/r/rjyzt2b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v89145xor"/><path class="sdjy2ybub"/><path class="ow6hpmbxg"/><path class="pir2u0bwv"/><path class="rjyzt2b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bank-notes"} {...others} />);
}

export default Component;
