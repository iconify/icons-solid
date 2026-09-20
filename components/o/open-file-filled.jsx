import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jcd1ec3dy.css';
import '../../css/z/zeo2ynvmp.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="jcd1ec3dy"/><path class="zeo2ynvmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:open-file-filled"} {...others} />);
}

export default Component;
