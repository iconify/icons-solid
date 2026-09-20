import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfb-rmbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfb-rmbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:backtop-rectangle-filled"} {...others} />);
}

export default Component;
