import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y1wnkvuzf.css';
import '../../css/w/w6l8jsbed.css';
import '../../css/a/az717jz7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y1wnkvuzf"/><path class="w6l8jsbed"/><path class="az717jz7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:monetization-bill-magnet"} {...others} />);
}

export default Component;
