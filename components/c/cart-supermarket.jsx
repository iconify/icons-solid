import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvtgyfbov.css';

const viewBox = {"width":512,"height":496};
const content = `<path class="dvtgyfbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:cart-supermarket"} {...others} />);
}

export default Component;
