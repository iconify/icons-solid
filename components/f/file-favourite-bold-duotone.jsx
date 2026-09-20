import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j59i-d3bj.css';
import '../../css/w/wzmgbfbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j59i-d3bj"/><path class="wzmgbfbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-favourite-bold-duotone"} {...others} />);
}

export default Component;
