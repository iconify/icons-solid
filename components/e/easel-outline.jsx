import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh0qs-btc.css';
import '../../css/d/dgnjy1a4g.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="lh0qs-btc"/><path class="dgnjy1a4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:easel-outline"} {...others} />);
}

export default Component;
