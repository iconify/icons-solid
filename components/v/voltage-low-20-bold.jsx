import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai5j-lbxc.css';
import '../../css/m/mo6avcbkz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ai5j-lbxc"/><path class="mo6avcbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-low-20-bold"} {...others} />);
}

export default Component;
