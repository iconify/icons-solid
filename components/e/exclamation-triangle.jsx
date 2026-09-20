import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj5tiwb9w.css';
import '../../css/i/i_m5aoo-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj5tiwb9w"/><path class="i_m5aoo-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:exclamation-triangle"} {...others} />);
}

export default Component;
