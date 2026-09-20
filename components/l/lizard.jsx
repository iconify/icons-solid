import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv01ucbgq.css';
import '../../css/b/bp49p9l1j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bv01ucbgq"/><path class="bp49p9l1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lizard"} {...others} />);
}

export default Component;
