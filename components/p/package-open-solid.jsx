import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b4g-rpboc.css';
import '../../css/w/wm-29zyee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="b4g-rpboc"/><path class="wm-29zyee wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-open-solid"} {...others} />);
}

export default Component;
