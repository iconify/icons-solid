import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8i4wsn-f.css';
import '../../css/g/gucvo3bak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m8i4wsn-f"/><path class="gucvo3bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:megaphone-outline"} {...others} />);
}

export default Component;
