import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w782_ibba.css';
import '../../css/d/dk77dnbeg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w782_ibba"/><path class="dk77dnbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-planet"} {...others} />);
}

export default Component;
