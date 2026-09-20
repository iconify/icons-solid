import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi3x8dbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fi3x8dbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:subtract-fill"} {...others} />);
}

export default Component;
