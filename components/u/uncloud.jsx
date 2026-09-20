import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ninrxlcbc.css';
import '../../css/w/wg1goqjvd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ninrxlcbc"/><path class="wg1goqjvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uncloud"} {...others} />);
}

export default Component;
