import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc_p1acct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vc_p1acct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:standard-notes-light"} {...others} />);
}

export default Component;
