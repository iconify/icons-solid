import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clcbdhbui.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="clcbdhbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flag-1-fill"} {...others} />);
}

export default Component;
