import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su5nz9bnp.css';
import '../../css/c/c-q5u1bet.css';
import '../../css/w/w6bhw7baw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="su5nz9bnp"/><path class="c-q5u1bet"/><path class="w6bhw7baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-hydrogen-48"} {...others} />);
}

export default Component;
