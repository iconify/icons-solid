import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq5pb0owa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wq5pb0owa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:volume-down"} {...others} />);
}

export default Component;
