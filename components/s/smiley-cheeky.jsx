import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhs37gbzw.css';
import '../../css/e/ezc6ubmmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhs37gbzw"/><path class="ezc6ubmmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-cheeky"} {...others} />);
}

export default Component;
