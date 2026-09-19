import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irl9z8uwq.css';
import '../../css/i/ioz8g2bzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="irl9z8uwq"/><path class="ioz8g2bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-html5-outline"} {...others} />);
}

export default Component;
