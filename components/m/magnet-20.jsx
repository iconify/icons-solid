import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvc1jlbnu.css';
import '../../css/j/juittjbbz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvc1jlbnu"/><path class="juittjbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magnet-20"} {...others} />);
}

export default Component;
