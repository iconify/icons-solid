import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp2g8gjga.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="tp2g8gjga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grin-beam"} {...others} />);
}

export default Component;
