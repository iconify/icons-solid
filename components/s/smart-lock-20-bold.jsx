import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgcb4c_nz.css';
import '../../css/c/ctkosrb3v.css';
import '../../css/l/lxsqj045t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jgcb4c_nz"/><path class="ctkosrb3v"/><path class="lxsqj045t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-lock-20-bold"} {...others} />);
}

export default Component;
