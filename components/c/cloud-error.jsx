import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n81s34bxe.css';
import '../../css/z/z_a0sm3vz.css';
import '../../css/m/mbpbzw3km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="n81s34bxe"/><path class="z_a0sm3vz"/><path class="mbpbzw3km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-error"} {...others} />);
}

export default Component;
