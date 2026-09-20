import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnk4x_bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnk4x_bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wave-right-filled"} {...others} />);
}

export default Component;
