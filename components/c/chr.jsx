import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euz4yigix.css';
import '../../css/x/xrxfll02s.css';
import '../../css/p/p5so3dbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="euz4yigix"/><path class="xrxfll02s"/><path class="p5so3dbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:chr"} {...others} />);
}

export default Component;
