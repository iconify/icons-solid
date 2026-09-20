import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/darp4o0pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="darp4o0pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-alt-2-duotone"} {...others} />);
}

export default Component;
