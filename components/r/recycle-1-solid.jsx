import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvoy9l1zh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tvoy9l1zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:recycle-1-solid"} {...others} />);
}

export default Component;
