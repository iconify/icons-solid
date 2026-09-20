import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfzhtmbxu.css';
import '../../css/b/bmz0dzmey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vfzhtmbxu"/><path class="bmz0dzmey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cardano-ada-line"} {...others} />);
}

export default Component;
