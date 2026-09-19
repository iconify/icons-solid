import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie7ll2bfh.css';
import '../../css/e/ei6p82b9q.css';
import '../../css/b/bue0babum.css';
import '../../css/q/qx4ca6bzw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ie7ll2bfh"/><path class="ei6p82b9q"/><path class="bue0babum"/><path class="qx4ca6bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:radio"} {...others} />);
}

export default Component;
