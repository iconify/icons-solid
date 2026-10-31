import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f92mcl_nx.css';
import '../../css/e/erndkffxn.css';
import '../../css/n/nudl7banp.css';
import '../../css/z/z01m0kbdk.css';
import '../../css/u/uftd87b3n.css';
import '../../css/s/s-uavwb1y.css';
import '../../css/t/t92dp4tya.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="f92mcl_nx"/><path class="erndkffxn"/><path class="nudl7banp"/><path class="z01m0kbdk"/><path class="uftd87b3n"/><path class="s-uavwb1y"/><path class="t92dp4tya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:zimbabwe"} {...others} />);
}

export default Component;
