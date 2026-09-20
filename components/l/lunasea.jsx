import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trlnbcbjf.css';
import '../../css/w/wie2-nbpn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="trlnbcbjf"/><path class="wie2-nbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lunasea"} {...others} />);
}

export default Component;
