import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9sfw7l0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9sfw7l0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moon-sleep-line"} {...others} />);
}

export default Component;
