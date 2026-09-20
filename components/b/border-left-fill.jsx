import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0m0jfbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0m0jfbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:border-left-fill"} {...others} />);
}

export default Component;
