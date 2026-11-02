import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1ci7lqxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1ci7lqxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exit-door-line"} {...others} />);
}

export default Component;
