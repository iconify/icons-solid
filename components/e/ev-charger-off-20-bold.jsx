import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u52a-ibck.css';
import '../../css/j/jhwn4fbsd.css';
import '../../css/q/qmmb_82ud.css';
import '../../css/u/ui-ddfl2z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u52a-ibck"/><path class="jhwn4fbsd"/><path class="qmmb_82ud"/><path class="ui-ddfl2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-off-20-bold"} {...others} />);
}

export default Component;
