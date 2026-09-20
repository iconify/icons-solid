import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w44_k6bry.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="w44_k6bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:mic-square-f"} {...others} />);
}

export default Component;
