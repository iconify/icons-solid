import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj084fw9a.css';
import '../../css/x/xzn_it8jp.css';
import '../../css/b/by0-yumdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj084fw9a"/><path class="xzn_it8jp"/><path class="by0-yumdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-bold-duotone"} {...others} />);
}

export default Component;
