import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvhhtlbpu.css';
import '../../css/k/kn7q06y6t.css';
import '../../css/p/puz5jibvr.css';
import '../../css/l/lid4odl4o.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nvhhtlbpu"/><path class="kn7q06y6t"/><path class="puz5jibvr"/><path class="lid4odl4o"/><path class="zkdyo_ief"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-plus-20"} {...others} />);
}

export default Component;
