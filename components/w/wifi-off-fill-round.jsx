import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwo1k3bnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwo1k3bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wifi-off-fill-round"} {...others} />);
}

export default Component;
