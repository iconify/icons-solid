import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/e/ezpi6nz5c.css';
import '../../css/y/y7ke0gjgt.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/w/w6jkbobhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="ezpi6nz5c wm-k"/><path class="wm-k y7ke0gjgt"/><path class="rjg00-qxz wm-shine"/><path class="w6jkbobhf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:baseball"} {...others} />);
}

export default Component;
