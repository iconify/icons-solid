import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3tyy5-9p.css';
import '../../css/u/u6c4ubc7p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t3tyy5-9p"/><path class="u6c4ubc7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penguin-20-bold"} {...others} />);
}

export default Component;
