import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk-a-0bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk-a-0bdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:square-dashed-cursor"} {...others} />);
}

export default Component;
