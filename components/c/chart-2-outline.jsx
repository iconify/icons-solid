import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i96wvdbsz.css';
import '../../css/w/won8re7ls.css';
import '../../css/k/krrh_9bjq.css';
import '../../css/x/xkyhbub-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i96wvdbsz"/><path clip-rule="evenodd" class="won8re7ls"/><path clip-rule="evenodd" class="krrh_9bjq"/><path class="xkyhbub-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-outline"} {...others} />);
}

export default Component;
