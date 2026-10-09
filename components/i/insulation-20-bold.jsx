import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mcems0k.css';
import '../../css/t/t_bk3zflf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1mcems0k"/><path class="t_bk3zflf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-20-bold"} {...others} />);
}

export default Component;
