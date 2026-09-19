import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzxe0-1un.css';
import '../../css/h/h84axl_8p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zzxe0-1un"/><path class="h84axl_8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:djangorest-wordmark"} {...others} />);
}

export default Component;
