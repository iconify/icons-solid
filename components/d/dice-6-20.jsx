import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxp0_ibgn.css';
import '../../css/v/v3yw67n4y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qxp0_ibgn"/><path class="v3yw67n4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dice-6-20"} {...others} />);
}

export default Component;
