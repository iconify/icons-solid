import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3vyvrbyw.css';
import '../../css/e/el2jujohs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3vyvrbyw"/><path class="el2jujohs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:look-right-line"} {...others} />);
}

export default Component;
