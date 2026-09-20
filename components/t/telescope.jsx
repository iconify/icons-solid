import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nw1o6hbup.css';
import '../../css/r/rtc2vebam.css';
import '../../css/q/qw0rhm64r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nw1o6hbup"/><path class="rtc2vebam"/><circle class="qw0rhm64r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:telescope"} {...others} />);
}

export default Component;
