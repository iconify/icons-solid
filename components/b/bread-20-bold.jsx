import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ndo13-j.css';
import '../../css/t/tyb8w2bjo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o1ndo13-j"/><path class="tyb8w2bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bread-20-bold"} {...others} />);
}

export default Component;
