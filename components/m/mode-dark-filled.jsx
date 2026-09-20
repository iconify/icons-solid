import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs2mikx-j.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="rs2mikx-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mode-dark-filled"} {...others} />);
}

export default Component;
