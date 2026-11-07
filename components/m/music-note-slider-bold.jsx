import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4x-dibbg.css';
import '../../css/p/pjg7f5xap.css';
import '../../css/q/qz1qozbrv.css';
import '../../css/u/uomfvrbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4x-dibbg"/><path clip-rule="evenodd" class="pjg7f5xap"/><path class="qz1qozbrv"/><path class="uomfvrbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-bold"} {...others} />);
}

export default Component;
