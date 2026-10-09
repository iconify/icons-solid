import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1middb0q.css';
import '../../css/o/o42c9jpgu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1middb0q"/><path class="o42c9jpgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dishwasher-20"} {...others} />);
}

export default Component;
