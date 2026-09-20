import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2yshue7o.css';
import '../../css/e/e1xd40_pr.css';
import '../../css/z/z0rs_mbws.css';
import '../../css/v/vq9d_mwxs.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="t2yshue7o"/><path class="e1xd40_pr"/><path class="z0rs_mbws"/><path class="vq9d_mwxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-inpatient"} {...others} />);
}

export default Component;
