import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p0uuuh_ua.css';
import '../../css/a/ahlmu3bhe.css';
import '../../css/y/yxa0nhn1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p0uuuh_ua"/><path class="ahlmu3bhe wm-a"/><path class="yxa0nhn1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-lightning-duo"} {...others} />);
}

export default Component;
