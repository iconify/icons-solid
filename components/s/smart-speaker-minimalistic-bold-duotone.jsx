import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwczj0bva.css';
import '../../css/i/ieaqgcb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwczj0bva"/><path class="ieaqgcb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
