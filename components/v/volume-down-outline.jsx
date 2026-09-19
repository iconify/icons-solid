import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlrf9sb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlrf9sb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:volume-down-outline"} {...others} />);
}

export default Component;
