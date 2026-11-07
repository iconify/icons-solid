import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8y2-tvlr.css';
import '../../css/q/qzm6rmb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s8y2-tvlr"/><path class="qzm6rmb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-bold-duotone"} {...others} />);
}

export default Component;
