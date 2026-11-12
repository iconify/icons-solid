import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyqg1bbfu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vyqg1bbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:system76-dark"} {...others} />);
}

export default Component;
