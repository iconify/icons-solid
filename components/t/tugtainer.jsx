import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8l_-fb_k.css';
import '../../css/j/js4-qccyb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j8l_-fb_k"/><path class="js4-qccyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tugtainer"} {...others} />);
}

export default Component;
