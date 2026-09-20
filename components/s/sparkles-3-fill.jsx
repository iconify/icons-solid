import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhae6cciv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yhae6cciv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sparkles-3-fill"} {...others} />);
}

export default Component;
