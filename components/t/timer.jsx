import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6fsplbwz.css';
import '../../css/l/l27lvlbht.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p6fsplbwz"/><path class="l27lvlbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:timer"} {...others} />);
}

export default Component;
