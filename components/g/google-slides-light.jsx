import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu6tghbwj.css';
import '../../css/x/xblsrbb2u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qu6tghbwj"/><path class="xblsrbb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-slides-light"} {...others} />);
}

export default Component;
