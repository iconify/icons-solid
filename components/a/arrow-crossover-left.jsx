import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_x7z-5qi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e_x7z-5qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-crossover-left"} {...others} />);
}

export default Component;
