import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdofmibhs.css';
import '../../css/k/kcdmr56ch.css';
import '../../css/u/u8e9kpb9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rdofmibhs"/><path class="kcdmr56ch"/><circle class="u8e9kpb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:world-monitor-light"} {...others} />);
}

export default Component;
