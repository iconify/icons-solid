import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6oy1q_yr.css';
import '../../css/c/c14mgt73k.css';
import '../../css/x/xq8wemwrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6oy1q_yr"/><path class="c14mgt73k"/><path class="xq8wemwrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:directions"} {...others} />);
}

export default Component;
