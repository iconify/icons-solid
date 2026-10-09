import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_g30-bhd.css';
import '../../css/c/ce0hw2blf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_g30-bhd"/><path class="ce0hw2blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-slice-20"} {...others} />);
}

export default Component;
