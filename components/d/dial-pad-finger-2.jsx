import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4q9gfbuc.css';
import '../../css/u/udykl8bri.css';
import '../../css/c/c1-tbyb0s.css';
import '../../css/b/bi92o_bby.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v4q9gfbuc"/><path class="udykl8bri"/><path class="c1-tbyb0s"/><path class="bi92o_bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dial-pad-finger-2"} {...others} />);
}

export default Component;
