import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4paek0_x.css';
import '../../css/l/lppl2sbhj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n4paek0_x"/><path class="lppl2sbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:group-objects-new"} {...others} />);
}

export default Component;
