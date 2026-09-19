import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/y/y5ywfkbiz.css';
import '../../css/n/nb60d5bfg.css';
import '../../css/l/lg_mi-u6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="y5ywfkbiz"/><circle class="nb60d5bfg"/><path class="lg_mi-u6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:camera-image-bold"} {...others} />);
}

export default Component;
