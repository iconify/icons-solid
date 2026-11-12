import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn0rtcc5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sn0rtcc5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:metadata-remote-dark"} {...others} />);
}

export default Component;
