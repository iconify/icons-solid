import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxcyibc3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vxcyibc3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bigbluebutton-light"} {...others} />);
}

export default Component;
