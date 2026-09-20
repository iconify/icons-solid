import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haqr67bmp.css';
import '../../css/i/iixqn4bev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="haqr67bmp"/><path class="iixqn4bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fan-direction-up-line"} {...others} />);
}

export default Component;
