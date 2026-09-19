import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwy9mjn_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwy9mjn_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shapes-alt"} {...others} />);
}

export default Component;
