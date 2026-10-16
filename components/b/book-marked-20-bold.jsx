import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al5fry1wp.css';
import '../../css/e/eremc1y7b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="al5fry1wp"/><path class="eremc1y7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-marked-20-bold"} {...others} />);
}

export default Component;
