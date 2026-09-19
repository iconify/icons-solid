import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgblcmbsv.css';
import '../../css/p/p_8a0397c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vgblcmbsv"/><path class="p_8a0397c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lips"} {...others} />);
}

export default Component;
