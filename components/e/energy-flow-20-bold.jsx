import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_xg23xbo.css';
import '../../css/y/y5ccdmbcq.css';
import '../../css/p/p1e2i1bne.css';
import '../../css/q/qpsxe7qzz.css';
import '../../css/u/u8qqsxbtk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c_xg23xbo"/><path class="y5ccdmbcq"/><path class="p1e2i1bne"/><path class="qpsxe7qzz"/><path class="u8qqsxbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-flow-20-bold"} {...others} />);
}

export default Component;
