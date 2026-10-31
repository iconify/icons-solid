import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r8jruljur.css';
import '../../css/p/pth4tz50t.css';
import '../../css/g/gsomp2blf.css';
import '../../css/m/mzrr-bc3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r8jruljur wm-shadow"/><path class="pth4tz50t wm-shadow"/><path class="gsomp2blf"/><path class="mzrr-bc3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gallery-horizontal"} {...others} />);
}

export default Component;
