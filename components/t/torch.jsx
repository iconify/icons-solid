import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw8ihx1hz.css';

const viewBox = {"width":512,"height":1024};
const content = `<path class="hw8ihx1hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:torch"} {...others} />);
}

export default Component;
