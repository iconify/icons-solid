import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nprfbcccb.css';
import '../../css/k/kibf-0bix.css';
import '../../css/o/o_yq_qbpx.css';
import '../../css/w/wmwdhvb1e.css';
import '../../css/p/pnrjk-s9i.css';
import '../../css/x/xe0whgu9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nprfbcccb"/><path clip-rule="evenodd" class="kibf-0bix"/><path clip-rule="evenodd" class="o_yq_qbpx"/><path clip-rule="evenodd" class="wmwdhvb1e"/><path clip-rule="evenodd" class="pnrjk-s9i"/><path class="xe0whgu9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:notification-bell-timer-outline"} {...others} />);
}

export default Component;
