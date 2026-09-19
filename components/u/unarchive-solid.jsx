import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9br7lbgu.css';
import '../../css/y/yjcpz2b6n.css';
import '../../css/i/iav4xjbql.css';
import '../../css/q/q_zg1k_eb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 r9br7lbgu"/><path class="clr-i-solid clr-i-solid-path-2 yjcpz2b6n"/><path class="clr-i-solid clr-i-solid-path-3 iav4xjbql"/><path class="clr-i-solid clr-i-solid-path-4 q_zg1k_eb"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:unarchive-solid"} {...others} />);
}

export default Component;
