import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcnx14bvv.css';
import '../../css/z/zl5ottbeq.css';
import '../../css/g/gkts-7b_j.css';
import '../../css/n/nj8t49bec.css';
import '../../css/m/m7sca_byj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gcnx14bvv"/><path class="zl5ottbeq"/><path class="gkts-7b_j"/><path class="nj8t49bec"/><path class="m7sca_byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-circle"} {...others} />);
}

export default Component;
