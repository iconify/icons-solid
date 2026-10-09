import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6-6-wgev.css';
import '../../css/t/tyoqu7bub.css';
import '../../css/l/l91t7i1ff.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y6-6-wgev"/><path class="tyoqu7bub"/><path class="l91t7i1ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-cylinder-20-bold"} {...others} />);
}

export default Component;
