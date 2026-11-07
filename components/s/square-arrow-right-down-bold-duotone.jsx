import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atpjn6hvy.css';
import '../../css/a/at2vc6bce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atpjn6hvy"/><path class="at2vc6bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-right-down-bold-duotone"} {...others} />);
}

export default Component;
