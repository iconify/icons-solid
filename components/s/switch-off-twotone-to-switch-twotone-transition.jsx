import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psp_wn.css';
import '../../css/y/ydovum.css';
import '../../css/d/ds-pxa.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="psp_wn ydovum"/><circle class="ds-pxa ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch-off-twotone-to-switch-twotone-transition"} {...others} />);
}

export default Component;
