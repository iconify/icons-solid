import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu2ws9tix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu2ws9tix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lollipop-line"} {...others} />);
}

export default Component;
