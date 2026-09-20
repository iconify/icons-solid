import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg73pq5no.css';
import '../../css/p/p2zr7kfxj.css';
import '../../css/t/t5aekeb8z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dg73pq5no"/><path class="p2zr7kfxj"/><path class="t5aekeb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-reward-gift"} {...others} />);
}

export default Component;
