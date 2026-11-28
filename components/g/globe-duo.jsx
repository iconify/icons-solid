import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqiz-dwfi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/t/tltjt5b_s.css';
import '../../css/b/b9rm32y0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vqiz-dwfi"/><g class="dt0cm9dhy primary"><path class="spokbjbne"/><path class="tltjt5b_s"/><path class="b9rm32y0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:globe-duo"} {...others} />);
}

export default Component;
