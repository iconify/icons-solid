import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipfdw6b6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ipfdw6b6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:face-grin-stars"} {...others} />);
}

export default Component;
