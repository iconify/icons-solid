import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni1uh9dfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ni1uh9dfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:empty-wood-bucket-handle"} {...others} />);
}

export default Component;
