import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hopwxcc7e.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="hopwxcc7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:fullscreen-exit"} {...others} />);
}

export default Component;
