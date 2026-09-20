import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us81xcbgt.css';
import '../../css/w/wpm7l0iir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us81xcbgt"/><path class="wpm7l0iir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:repeat-one-line"} {...others} />);
}

export default Component;
