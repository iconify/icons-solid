import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njugq7b3t.css';
import '../../css/c/c30026bip.css';
import '../../css/n/nc9t4bk_l.css';
import '../../css/o/olueoot6c.css';
import '../../css/e/em9rmgbqy.css';
import '../../css/w/wbigzibcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="njugq7b3t"/><path class="c30026bip"/><path class="nc9t4bk_l"/><path class="olueoot6c"/><path class="em9rmgbqy"/><path class="wbigzibcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ipfs"} {...others} />);
}

export default Component;
