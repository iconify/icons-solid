import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nypiozjlx.css';
import '../../css/w/wybr_2bnz.css';
import '../../css/g/gwg5jv59q.css';
import '../../css/n/niyv1hwum.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nypiozjlx"/><path class="wybr_2bnz"/><path class="gwg5jv59q"/><path class="niyv1hwum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ball-valve-48-bold"} {...others} />);
}

export default Component;
