import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-e-1ibqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="n-e-1ibqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:tag-eye-filled"} {...others} />);
}

export default Component;
