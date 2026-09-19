import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/e9waokbhr.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/q/q7do0tepr.css';
import '../../css/c/c1t--rtgz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGT468QRJI"><g class="v3_i3wktz"><path class="e9waokbhr"/><path class="g7z2j-78e"/><path class="q7do0tepr"/><path class="c1t--rtgz"/></g></mask></defs><path mask="url(#SVGT468QRJI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:joystick"} {...others} />);
}

export default Component;
