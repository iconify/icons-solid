import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0e9-g4hi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0e9-g4hi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:funnel-outline"} {...others} />);
}

export default Component;
