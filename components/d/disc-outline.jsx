import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w84vznkgo.css';
import '../../css/f/fb3944y_s.css';
import '../../css/a/a1bg4hbvb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w84vznkgo"/><circle class="fb3944y_s"/><circle class="a1bg4hbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:disc-outline"} {...others} />);
}

export default Component;
