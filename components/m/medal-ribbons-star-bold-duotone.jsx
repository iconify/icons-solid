import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so45uzv5f.css';
import '../../css/w/w7_a60-yr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="so45uzv5f"/><path clip-rule="evenodd" class="w7_a60-yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-bold-duotone"} {...others} />);
}

export default Component;
