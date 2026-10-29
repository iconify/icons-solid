import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jds6n7b3j.css';
import '../../css/c/ca41k3b-d.css';
import '../../css/g/ghdivotkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jds6n7b3j"/><path class="ca41k3b-d wm-a"/><path class="ghdivotkq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screen-share-solid"} {...others} />);
}

export default Component;
