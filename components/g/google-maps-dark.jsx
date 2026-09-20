import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nac1dwsdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nac1dwsdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-maps-dark"} {...others} />);
}

export default Component;
