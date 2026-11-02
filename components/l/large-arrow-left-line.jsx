import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce2w5xbck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce2w5xbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:large-arrow-left-line"} {...others} />);
}

export default Component;
