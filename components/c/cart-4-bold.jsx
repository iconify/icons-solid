import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atzp2n7qu.css';
import '../../css/y/yp-w5kbir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atzp2n7qu"/><path clip-rule="evenodd" class="yp-w5kbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-bold"} {...others} />);
}

export default Component;
