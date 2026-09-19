import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mj39bccmk.css';
import '../../css/y/y8v-tql_s.css';
import '../../css/e/eh1mrdboo.css';
import '../../css/g/g1vvsjbea.css';
import '../../css/s/sbvfr8zps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvCB63dAM"><g class="rohhhzb0l"><path class="mj39bccmk"/><path class="y8v-tql_s"/><circle class="eh1mrdboo"/><path class="g1vvsjbea"/><path class="sbvfr8zps"/></g></mask></defs><path mask="url(#SVGvCB63dAM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mounted"} {...others} />);
}

export default Component;
