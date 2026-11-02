import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfoyag69q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfoyag69q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flight-takeoff-line"} {...others} />);
}

export default Component;
