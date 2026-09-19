import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcdx9-l-j.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="lcdx9-l-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:hand-pointer"} {...others} />);
}

export default Component;
