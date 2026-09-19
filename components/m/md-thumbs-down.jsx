import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1jo94x0n.css';
import '../../css/h/h1tlzyagf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a1jo94x0n"/><path class="h1tlzyagf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-thumbs-down"} {...others} />);
}

export default Component;
