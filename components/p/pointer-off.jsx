import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e00v7ofcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e00v7ofcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pointer-off"} {...others} />);
}

export default Component;
