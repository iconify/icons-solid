import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmdw-9bte.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="xmdw-9bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-right"} {...others} />);
}

export default Component;
