import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vws7xf1nk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vws7xf1nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-rectangle-filled"} {...others} />);
}

export default Component;
