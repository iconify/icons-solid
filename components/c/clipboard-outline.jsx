import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br71gpb8p.css';
import '../../css/i/izu9akmqb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="br71gpb8p"/><rect class="izu9akmqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:clipboard-outline"} {...others} />);
}

export default Component;
