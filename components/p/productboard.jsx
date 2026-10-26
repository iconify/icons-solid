import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khc6856kd.css';
import '../../css/o/oel1jvbgo.css';

const viewBox = {"width":64,"height":42};
const content = `<path class="khc6856kd"/><path class="oel1jvbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:productboard"} {...others} />);
}

export default Component;
