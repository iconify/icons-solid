import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sde3gc6on.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sde3gc6on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:undertake-hold-up-filled"} {...others} />);
}

export default Component;
