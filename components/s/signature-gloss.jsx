import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/ve6s1acld.css';
import '../../css/m/md5on86yt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ve6s1acld wm-k"/><path class="md5on86yt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signature-gloss"} {...others} />);
}

export default Component;
