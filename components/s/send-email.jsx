import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-0nc7mfi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p-0nc7mfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:send-email"} {...others} />);
}

export default Component;
