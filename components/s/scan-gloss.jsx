import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbqhub9ez.css';
import '../../css/i/i_5v2jb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tbqhub9ez wm-k"/><path class="i_5v2jb5i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-gloss"} {...others} />);
}

export default Component;
