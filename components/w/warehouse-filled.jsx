import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yellpjx9e.css';
import '../../css/l/l8r0bab9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yellpjx9e"/><path class="l8r0bab9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:warehouse-filled"} {...others} />);
}

export default Component;
