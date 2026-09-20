import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnob0x5zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnob0x5zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fit-to-screen"} {...others} />);
}

export default Component;
