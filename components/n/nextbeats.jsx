import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_49x_b_v.css';
import '../../css/w/wr-7e-6db.css';
import '../../css/w/wyeldhbnr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m_49x_b_v"/><path class="wr-7e-6db"/><path class="wyeldhbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextbeats"} {...others} />);
}

export default Component;
