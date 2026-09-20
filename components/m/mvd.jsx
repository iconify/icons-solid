import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv-1zrbaw.css';
import '../../css/f/far9sjb5z.css';
import '../../css/r/rzenqebrl.css';
import '../../css/u/usl1t3_kv.css';
import '../../css/m/m_cwhk1xo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv-1zrbaw"/><path class="far9sjb5z"/><path class="rzenqebrl"/><path class="usl1t3_kv"/><path class="m_cwhk1xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mvd"} {...others} />);
}

export default Component;
