import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/n/nd9qslmdc.css';
import '../../css/q/q9vu7mxpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="nd9qslmdc"/><path class="q9vu7mxpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-marked-filled"} {...others} />);
}

export default Component;
