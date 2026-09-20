import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr9kmlbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vr9kmlbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-minimalistic-outline"} {...others} />);
}

export default Component;
