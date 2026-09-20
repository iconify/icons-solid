import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/p/p-zwxcbbk.css';
import '../../css/t/t8vhikbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="p-zwxcbbk"/><path class="t8vhikbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fingerprint-2"} {...others} />);
}

export default Component;
