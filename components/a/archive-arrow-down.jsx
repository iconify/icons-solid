import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/df157mdeq.css';
import '../../css/m/mjbrxhhuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="df157mdeq"/><path class="mjbrxhhuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:archive-arrow-down"} {...others} />);
}

export default Component;
