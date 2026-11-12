import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_pu1d1nt.css';
import '../../css/x/xifkqvb3u.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="e_pu1d1nt"/><path class="xifkqvb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbkan"} {...others} />);
}

export default Component;
