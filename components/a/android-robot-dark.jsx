import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrke2mbwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xrke2mbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:android-robot-dark"} {...others} />);
}

export default Component;
