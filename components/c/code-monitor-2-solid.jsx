import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_0v8sb1u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f_0v8sb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:code-monitor-2-solid"} {...others} />);
}

export default Component;
