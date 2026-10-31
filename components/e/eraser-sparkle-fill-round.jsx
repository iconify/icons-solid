import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puznxsb5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="puznxsb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eraser-sparkle-fill-round"} {...others} />);
}

export default Component;
