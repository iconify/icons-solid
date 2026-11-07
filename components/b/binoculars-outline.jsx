import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk9skhkui.css';
import '../../css/q/qqlpehxim.css';
import '../../css/f/fe61ukfco.css';
import '../../css/m/mdfdrlbhr.css';
import '../../css/b/bsmairrif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xk9skhkui"/><path class="qqlpehxim"/><path class="fe61ukfco"/><path class="mdfdrlbhr"/><path class="bsmairrif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-outline"} {...others} />);
}

export default Component;
