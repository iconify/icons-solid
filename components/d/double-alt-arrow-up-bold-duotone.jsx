import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb1na5jao.css';
import '../../css/z/z7rhdcbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb1na5jao"/><path clip-rule="evenodd" class="z7rhdcbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
