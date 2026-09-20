import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu60zac_q.css';
import '../../css/g/g15pwcbhu.css';
import '../../css/e/evac21bjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mu60zac_q"/><path class="g15pwcbhu"/><path class="evac21bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-2016"} {...others} />);
}

export default Component;
