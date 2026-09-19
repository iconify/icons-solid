import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbq_y8bzz.css';
import '../../css/t/t9tbnorgg.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="lbq_y8bzz"/><path id="SVGxzqvKe5j" class="t9tbnorgg"/><use width="100%" height="100%" href="#SVGxzqvKe5j" transform="matrix(-1 0 0 1 640 0)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:al-4x3"} {...others} />);
}

export default Component;
