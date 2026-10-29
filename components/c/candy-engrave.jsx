import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y_jacfocb.css';
import '../../css/y/y2i2crbcm.css';
import '../../css/o/ocoockb2g.css';
import '../../css/a/ax14dsbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y_jacfocb"/><path class="wm-shadow y2i2crbcm"/><path class="ocoockb2g"/><path class="ax14dsbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-engrave"} {...others} />);
}

export default Component;
