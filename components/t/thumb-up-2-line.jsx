import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i82l_mncq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i82l_mncq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:thumb-up-2-line"} {...others} />);
}

export default Component;
