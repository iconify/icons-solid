import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj3g4qi-v.css';
import '../../css/f/fcca0vb6b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj3g4qi-v"/><path class="fcca0vb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-budget-20"} {...others} />);
}

export default Component;
