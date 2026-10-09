import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcffi5bhx.css';
import '../../css/b/bmcqqkc-j.css';
import '../../css/v/vxcyymb5d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zcffi5bhx"/><path class="bmcqqkc-j"/><path class="vxcyymb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whisk-20-bold"} {...others} />);
}

export default Component;
