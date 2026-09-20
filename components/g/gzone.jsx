import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v33u5xbiv.css';
import '../../css/p/pdopt9m6b.css';
import '../../css/d/d8p91acss.css';
import '../../css/m/mrzpmkb3w.css';
import '../../css/s/sf3t8ob2w.css';
import '../../css/w/w9-ssfczf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v33u5xbiv"/><path class="pdopt9m6b"/><path class="d8p91acss"/><path class="mrzpmkb3w"/><path class="sf3t8ob2w"/><path class="w9-ssfczf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gzone"} {...others} />);
}

export default Component;
