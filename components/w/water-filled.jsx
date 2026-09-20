import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcf5jt.css';
import '../../css/w/w1kvfb.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-22.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcf5jt"/><path class="w1kvfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:water-filled"} {...others} />);
}

export default Component;
