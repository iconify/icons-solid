import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr83kubtu.css';
import '../../css/f/fyjv8ddts.css';
import '../../css/x/x5aslfb5u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gr83kubtu"/><path class="fyjv8ddts"/><path class="x5aslfb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:agv-20-bold"} {...others} />);
}

export default Component;
