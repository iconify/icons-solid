import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl470_b0c.css';
import '../../css/x/xgglfabho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl470_b0c"/><path class="xgglfabho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:phone-ring"} {...others} />);
}

export default Component;
