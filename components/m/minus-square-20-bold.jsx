import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fec4cjbkq.css';
import '../../css/u/u1--n3bbd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fec4cjbkq"/><path class="u1--n3bbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minus-square-20-bold"} {...others} />);
}

export default Component;
