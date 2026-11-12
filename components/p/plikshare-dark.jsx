import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdv9p3brn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gdv9p3brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plikshare-dark"} {...others} />);
}

export default Component;
