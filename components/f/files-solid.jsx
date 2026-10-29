import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a3h4-91du.css';
import '../../css/w/ww7t-sb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a3h4-91du"/><path class="wm-a ww7t-sb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files-solid"} {...others} />);
}

export default Component;
