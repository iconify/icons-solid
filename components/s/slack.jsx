import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrwfaf3df.css';
import '../../css/z/zpp-6pm-i.css';
import '../../css/q/q4m0g8bzp.css';
import '../../css/x/xxqqfb5ec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nrwfaf3df"/><path class="zpp-6pm-i"/><path class="q4m0g8bzp"/><path class="xxqqfb5ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:slack"} {...others} />);
}

export default Component;
