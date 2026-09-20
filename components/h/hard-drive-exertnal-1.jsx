import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc9v-pb0v.css';
import '../../css/i/i79qx-ncx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc9v-pb0v"/><path class="i79qx-ncx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:hard-drive-exertnal-1"} {...others} />);
}

export default Component;
