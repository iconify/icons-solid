import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6og01bov.css';
import '../../css/z/zq6-sshry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6og01bov"/><path class="zq6-sshry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wholesale-price-20"} {...others} />);
}

export default Component;
