import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f53r9-bns.css';
import '../../css/h/hutz5yftv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f53r9-bns"/><path class="hutz5yftv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fedex"} {...others} />);
}

export default Component;
