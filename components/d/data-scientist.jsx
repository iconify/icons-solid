import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7u7246jg.css';
import '../../css/k/kmzp8bb_p.css';
import '../../css/z/zzw3usbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7u7246jg"/><circle class="kmzp8bb_p"/><path class="zzw3usbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:data-scientist"} {...others} />);
}

export default Component;
