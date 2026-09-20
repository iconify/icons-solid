import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtg3-_bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtg3-_bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:hospital-symbol"} {...others} />);
}

export default Component;
