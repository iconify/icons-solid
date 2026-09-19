import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8zp1_bsn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h8zp1_bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:triangle-exclamation"} {...others} />);
}

export default Component;
