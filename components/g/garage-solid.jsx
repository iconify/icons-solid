import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk-jb4_bv.css';
import '../../css/y/yg49weaem.css';
import '../../css/k/kyq-juboh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lk-jb4_bv"/><path clip-rule="evenodd" class="yg49weaem"/><path class="kyq-juboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:garage-solid"} {...others} />);
}

export default Component;
