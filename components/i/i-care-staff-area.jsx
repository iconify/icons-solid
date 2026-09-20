import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v155xpb1d.css';
import '../../css/x/x7ektt91o.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v155xpb1d"/><path class="x7ektt91o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-care-staff-area"} {...others} />);
}

export default Component;
