import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qsltavb2h.css';
import '../../css/b/b-2svcc6k.css';
import '../../css/y/yhy1nwzuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qsltavb2h"/><path class="b-2svcc6k wm-a"/><path class="wm-s yhy1nwzuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-smartphone-solid"} {...others} />);
}

export default Component;
