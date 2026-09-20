import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_p7_xt8v.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w_p7_xt8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:signal-full"} {...others} />);
}

export default Component;
