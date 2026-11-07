import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcid6acgw.css';
import '../../css/g/g-fa1j-ay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bcid6acgw"/><path class="g-fa1j-ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-square-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
