import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb5y06but.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pb5y06but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-outline"} {...others} />);
}

export default Component;
