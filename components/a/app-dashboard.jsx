import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw-0snbeq.css';
import '../../css/w/w-hibw8hw.css';
import '../../css/x/xeb9n_bni.css';
import '../../css/v/vux753b6n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fw-0snbeq"/><path class="ouiIcon__fillSecondary w-hibw8hw"/><path class="xeb9n_bni"/><path class="ouiIcon__fillSecondary vux753b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-dashboard"} {...others} />);
}

export default Component;
