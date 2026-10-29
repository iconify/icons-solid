import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udk7afsfs.css';
import '../../css/a/at4-951so.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="udk7afsfs"/><path class="at4-951so wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-cog-solid"} {...others} />);
}

export default Component;
