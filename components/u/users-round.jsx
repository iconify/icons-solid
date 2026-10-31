import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ui3at1b2e.css';
import '../../css/d/dz32fvbgs.css';
import '../../css/n/nsksf78-k.css';
import '../../css/v/v8y-98bnm.css';
import '../../css/y/yd09ymsbu.css';
import '../../css/n/nat0czbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ui3at1b2e wm-shadow"/><path class="dz32fvbgs wm-shadow"/><path class="nsksf78-k"/><path class="v8y-98bnm"/><path class="yd09ymsbu"/><path class="nat0czbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:users-round"} {...others} />);
}

export default Component;
