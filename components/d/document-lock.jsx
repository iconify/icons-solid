import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llzqa-0gd.css';
import '../../css/w/wkau1rbrb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="llzqa-0gd"/><path class="wkau1rbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-lock"} {...others} />);
}

export default Component;
