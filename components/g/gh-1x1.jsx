import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdgev-rkf.css';
import '../../css/n/nym97nevk.css';
import '../../css/u/u-bp7mb3x.css';
import '../../css/b/bmo7zrg8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xdgev-rkf"/><path class="nym97nevk"/><path class="u-bp7mb3x"/><path class="bmo7zrg8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gh-1x1"} {...others} />);
}

export default Component;
