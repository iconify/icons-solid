import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxgyedcli.css';
import '../../css/v/vr6bwvoqs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zxgyedcli"/><path class="vr6bwvoqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-substation-20-bold"} {...others} />);
}

export default Component;
