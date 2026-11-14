import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8w5gd35u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8w5gd35u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-content-generator-01"} {...others} />);
}

export default Component;
