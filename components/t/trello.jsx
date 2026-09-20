import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxzxpgb6m.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/i/id4sdkj0f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxzxpgb6m"/><linearGradient id="SVGcE4nketz" x1="-36.91" x2="-36.91" y1="627.368" y2="647.678" gradientTransform="matrix(25.2082 0 0 -25.1919 1186.435 16316.43)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGcE4nketz)" class="id4sdkj0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trello"} {...others} />);
}

export default Component;
