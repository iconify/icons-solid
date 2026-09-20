import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/figruzihz.css';
import '../../css/l/ll5ze5bad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="figruzihz"/><path class="ll5ze5bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:settings-screwdriver"} {...others} />);
}

export default Component;
