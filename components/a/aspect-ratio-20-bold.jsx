import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-w1mof7v.css';
import '../../css/l/lzskzeb_z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b-w1mof7v"/><path class="lzskzeb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aspect-ratio-20-bold"} {...others} />);
}

export default Component;
