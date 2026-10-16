import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdui42b6r.css';
import '../../css/j/j6e6uqpop.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdui42b6r"/><path class="j6e6uqpop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:money-bag-20-bold"} {...others} />);
}

export default Component;
