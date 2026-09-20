import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v326h-n7o.css';
import '../../css/r/rc04i3pkz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v326h-n7o"/><path class="rc04i3pkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planarally"} {...others} />);
}

export default Component;
