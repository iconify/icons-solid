import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky_qdhb1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ky_qdhb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:cargo-ship"} {...others} />);
}

export default Component;
