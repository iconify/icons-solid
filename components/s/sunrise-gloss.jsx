import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/buhs003aw.css';
import '../../css/n/nscebibah.css';
import '../../css/k/kgfl-19oz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="buhs003aw wm-k"/><path class="nscebibah wm-a"/><path class="kgfl-19oz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunrise-gloss"} {...others} />);
}

export default Component;
