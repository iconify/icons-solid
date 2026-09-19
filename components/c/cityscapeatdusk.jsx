import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcwvm_w5y.css';
import '../../css/r/rebtmz_8a.css';
import '../../css/c/cdjz1qbpw.css';
import '../../css/i/issw8ybpq.css';
import '../../css/h/hi90qgeed.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dcwvm_w5y"/><path class="rebtmz_8a"/><path class="cdjz1qbpw"/><path class="issw8ybpq"/><path class="hi90qgeed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cityscapeatdusk"} {...others} />);
}

export default Component;
