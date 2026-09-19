import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnl1p-2gq.css';
import '../../css/l/llymw2wsd.css';
import '../../css/s/slx--zbzd.css';
import '../../css/l/loxcckgkg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qnl1p-2gq"/><path class="llymw2wsd"/><path class="slx--zbzd"/><path class="loxcckgkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-images"} {...others} />);
}

export default Component;
