import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly3zt6bpv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ly3zt6bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:chocolate-bar"} {...others} />);
}

export default Component;
