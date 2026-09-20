import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8i_m7m5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8i_m7m5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:text-cursor-input"} {...others} />);
}

export default Component;
