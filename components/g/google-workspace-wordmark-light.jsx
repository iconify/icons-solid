import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbfsq-g3p.css';
import '../../css/w/w5v4f9b3d.css';
import '../../css/j/jpv6g7hti.css';

const viewBox = {"width":1024,"height":130};
const content = `<path class="mbfsq-g3p"/><path class="w5v4f9b3d"/><path class="jpv6g7hti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-workspace-wordmark-light"} {...others} />);
}

export default Component;
