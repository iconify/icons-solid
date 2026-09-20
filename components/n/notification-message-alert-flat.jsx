import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii_ue1uae.css';
import '../../css/w/wdr0ipbvd.css';
import '../../css/s/s3_kmfbpm.css';
import '../../css/i/ic9gtpb4q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ii_ue1uae"/><path clip-rule="evenodd" class="wdr0ipbvd"/><path class="s3_kmfbpm"/><path clip-rule="evenodd" class="ic9gtpb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:notification-message-alert-flat"} {...others} />);
}

export default Component;
