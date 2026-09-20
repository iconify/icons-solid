import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phqcd--ip.css';
import '../../css/n/n5tl80b1h.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="phqcd--ip"/><path class="n5tl80b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:godonateme-dark"} {...others} />);
}

export default Component;
