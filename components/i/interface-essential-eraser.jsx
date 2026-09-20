import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0bj62blk.css';
import '../../css/d/d53e2j-bt.css';
import '../../css/l/l6t3pibej.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j0bj62blk"/><path class="d53e2j-bt"/><path class="l6t3pibej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-eraser"} {...others} />);
}

export default Component;
