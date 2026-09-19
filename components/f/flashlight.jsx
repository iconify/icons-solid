import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f6a9c8f7a.css';
import '../../css/y/ydqauvg5t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="f6a9c8f7a"/><path class="ydqauvg5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flashlight"} {...others} />);
}

export default Component;
