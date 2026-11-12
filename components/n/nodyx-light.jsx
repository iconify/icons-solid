import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6s54bcir.css';
import '../../css/m/m6_4qv90d.css';
import '../../css/y/ydohd-r6b.css';
import '../../css/u/ugods-bug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v6s54bcir"/><circle class="m6_4qv90d"/><path class="ydohd-r6b"/><path class="ugods-bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodyx-light"} {...others} />);
}

export default Component;
