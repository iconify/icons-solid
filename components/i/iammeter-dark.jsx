import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftl1fs6jj.css';
import '../../css/d/d_6q8_bmz.css';
import '../../css/p/p9cww-tje.css';
import '../../css/n/n2ukd0cxs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ftl1fs6jj"/><path class="d_6q8_bmz"/><path class="p9cww-tje"/><path class="n2ukd0cxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iammeter-dark"} {...others} />);
}

export default Component;
