import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo53krbdf.css';
import '../../css/v/vf-n7zb4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vo53krbdf"/><path class="vf-n7zb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-parking-20"} {...others} />);
}

export default Component;
