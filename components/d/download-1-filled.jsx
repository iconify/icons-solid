import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne__3rynp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne__3rynp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:download-1-filled"} {...others} />);
}

export default Component;
