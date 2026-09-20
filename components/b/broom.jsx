import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzx2p7ngo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzx2p7ngo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:broom"} {...others} />);
}

export default Component;
