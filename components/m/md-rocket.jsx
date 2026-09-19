import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqmaimblk.css';
import '../../css/j/j7wys6bic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lqmaimblk"/><path class="j7wys6bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-rocket"} {...others} />);
}

export default Component;
