import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fec4cjbkq.css';
import '../../css/u/u1--n3bbd.css';
import '../../css/e/ex5x2ve3t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fec4cjbkq"/><path class="u1--n3bbd"/><path class="ex5x2ve3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-square-20-bold"} {...others} />);
}

export default Component;
