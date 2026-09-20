import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dur0b2p3t.css';
import '../../css/k/kqwq9psty.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dur0b2p3t"/><path class="kqwq9psty"/><path class="u9hq09b6k"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-germany"} {...others} />);
}

export default Component;
