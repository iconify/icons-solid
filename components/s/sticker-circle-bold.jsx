import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc_x2tbuz.css';
import '../../css/m/mms9xzmvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc_x2tbuz"/><path class="mms9xzmvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-circle-bold"} {...others} />);
}

export default Component;
