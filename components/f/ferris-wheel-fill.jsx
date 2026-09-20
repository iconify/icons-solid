import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgz7q7b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgz7q7b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ferris-wheel-fill"} {...others} />);
}

export default Component;
