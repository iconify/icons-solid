import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq5s2da7d.css';
import '../../css/i/ihesg5bsf.css';
import '../../css/r/rfcsgtbnf.css';
import '../../css/s/sxq7-xbtr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qq5s2da7d"/><path class="ihesg5bsf"/><path class="rfcsgtbnf"/><path class="sxq7-xbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-lightbulb-outline"} {...others} />);
}

export default Component;
