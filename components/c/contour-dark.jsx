import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7g5w-bhc.css';
import '../../css/q/qu_-3cc-k.css';
import '../../css/u/urw0m8b-p.css';

const viewBox = {"width":360,"height":360};
const content = `<path class="i7g5w-bhc"/><path class="qu_-3cc-k"/><path class="urw0m8b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:contour-dark"} {...others} />);
}

export default Component;
