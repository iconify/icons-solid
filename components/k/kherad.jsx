import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbrxewtok.css';
import '../../css/i/iw0mf28vs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bbrxewtok"/><path class="iw0mf28vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kherad"} {...others} />);
}

export default Component;
