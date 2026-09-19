import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvnkdr6kn.css';
import '../../css/u/ufqy7fo2b.css';
import '../../css/w/wvnrybc8p.css';
import '../../css/a/azzi7-0in.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="qvnkdr6kn"/><path class="ufqy7fo2b"/><path class="wvnrybc8p"/><path class="azzi7-0in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:circledideographsecret"} {...others} />);
}

export default Component;
