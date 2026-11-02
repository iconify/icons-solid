import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd41p8x-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd41p8x-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chess-rook-fill"} {...others} />);
}

export default Component;
