import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2_7wmb7u.css';
import '../../css/w/wdiw5pb9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o2_7wmb7u"/><path class="wdiw5pb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:conduit-open-webui"} {...others} />);
}

export default Component;
