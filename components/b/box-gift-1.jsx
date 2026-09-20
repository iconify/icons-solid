import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l33qbtbhd.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="l33qbtbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:box-gift-1"} {...others} />);
}

export default Component;
