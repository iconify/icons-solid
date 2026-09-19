import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amezjz6vh.css';
import '../../css/a/a1eidib9e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="amezjz6vh"/><path class="a1eidib9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-contact"} {...others} />);
}

export default Component;
