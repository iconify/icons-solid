import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1unvhb9q.css';
import '../../css/i/inkg4h-8v.css';
import '../../css/l/lcly8xbdq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g1unvhb9q"/><path class="inkg4h-8v"/><path class="lcly8xbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:victoryhand"} {...others} />);
}

export default Component;
