import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/im839mbzz.css';
import '../../css/m/m37tbt41a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="im839mbzz"/><path class="m37tbt41a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:degree-hat"} {...others} />);
}

export default Component;
