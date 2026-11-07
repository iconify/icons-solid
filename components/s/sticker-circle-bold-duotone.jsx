import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mms9xzmvs.css';
import '../../css/g/gxzkh2b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mms9xzmvs"/><path class="gxzkh2b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-circle-bold-duotone"} {...others} />);
}

export default Component;
