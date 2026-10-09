import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xldecsnzb.css';
import '../../css/v/vgmnx8bzw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xldecsnzb"/><path class="vgmnx8bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iron-20-bold"} {...others} />);
}

export default Component;
