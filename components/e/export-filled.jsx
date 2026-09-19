import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3_uaza_u.css';
import '../../css/z/zn4yv5btu.css';
import '../../css/t/tdsy3x63e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3_uaza_u"/><path clip-rule="evenodd" class="zn4yv5btu"/><path clip-rule="evenodd" class="tdsy3x63e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:export-filled"} {...others} />);
}

export default Component;
