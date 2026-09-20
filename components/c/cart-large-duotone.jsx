import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4rmvcc_s.css';
import '../../css/s/swm90vkhe.css';
import '../../css/i/isdk7pbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4rmvcc_s"/><path class="swm90vkhe"/><path class="isdk7pbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-large-duotone"} {...others} />);
}

export default Component;
