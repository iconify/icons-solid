import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpwlrrj0w.css';
import '../../css/f/f1-j5o70g.css';
import '../../css/j/jzpmabcry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jpwlrrj0w"/><path class="f1-j5o70g"/><path class="jzpmabcry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:manganese-20-bold"} {...others} />);
}

export default Component;
