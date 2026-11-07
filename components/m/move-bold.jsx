import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnoj3cihf.css';
import '../../css/t/t4ld3deyo.css';
import '../../css/f/f8n3u4syj.css';
import '../../css/l/lgqb26d1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnoj3cihf"/><path class="t4ld3deyo"/><path class="f8n3u4syj"/><path class="lgqb26d1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-bold"} {...others} />);
}

export default Component;
