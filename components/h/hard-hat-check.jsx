import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fib0t9bty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fib0t9bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:hard-hat-check"} {...others} />);
}

export default Component;
