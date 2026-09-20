import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/skyyumbdq.css';
import '../../css/a/ac8-dlbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="skyyumbdq"/><path class="ac8-dlbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:usb-port-1"} {...others} />);
}

export default Component;
