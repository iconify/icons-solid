import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch5v2hhuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ch5v2hhuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:signal-diamond"} {...others} />);
}

export default Component;
