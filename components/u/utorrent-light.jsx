import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksc5z13bv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ksc5z13bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:utorrent-light"} {...others} />);
}

export default Component;
