import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raijdkbtr.css';
import '../../css/x/xvulmum9n.css';
import '../../css/i/ijb0cllyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="raijdkbtr"/><path class="xvulmum9n"/><path class="ijb0cllyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dice-three"} {...others} />);
}

export default Component;
