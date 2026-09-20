import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agqa6qbci.css';
import '../../css/i/ic7d043zq.css';
import '../../css/k/kcldt_bnk.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="agqa6qbci"/><path class="ic7d043zq"/><path class="kcldt_bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-intensive-care"} {...others} />);
}

export default Component;
