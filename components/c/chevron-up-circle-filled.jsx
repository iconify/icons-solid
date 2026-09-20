import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dahmwgaew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dahmwgaew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chevron-up-circle-filled"} {...others} />);
}

export default Component;
