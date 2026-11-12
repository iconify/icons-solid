import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyp46zrds.css';
import '../../css/s/s4z2tns2t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zyp46zrds"/><path class="s4z2tns2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-messages-light"} {...others} />);
}

export default Component;
