import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5dw-kbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p5dw-kbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cellular-network-lte"} {...others} />);
}

export default Component;
