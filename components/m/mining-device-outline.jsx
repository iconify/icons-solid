import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ilbeybc2v.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/p/purz4ubxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ilbeybc2v"/><circle class="aqhok2bbj"/><path class="purz4ubxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mining-device-outline"} {...others} />);
}

export default Component;
