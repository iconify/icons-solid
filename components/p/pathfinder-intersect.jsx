import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh0v953fc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jh0v953fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pathfinder-intersect"} {...others} />);
}

export default Component;
