import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tudn0h4za.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tudn0h4za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bone-fill"} {...others} />);
}

export default Component;
