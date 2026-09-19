import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj3gltbbh.css';
import '../../css/g/gvjt3ybox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cj3gltbbh"/><path class="gvjt3ybox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-wechat"} {...others} />);
}

export default Component;
