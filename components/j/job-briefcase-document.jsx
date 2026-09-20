import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bs4k6fbtt.css';
import '../../css/m/m3xbg9eod.css';
import '../../css/u/u8zehtrfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bs4k6fbtt"/><path class="m3xbg9eod"/><path class="u8zehtrfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:job-briefcase-document"} {...others} />);
}

export default Component;
