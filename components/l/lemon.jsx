import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vdcafq03r.css';
import '../../css/i/i9q6r1isj.css';
import '../../css/d/dpqm70bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vdcafq03r"/><path class="i9q6r1isj"/><path class="dpqm70bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lemon"} {...others} />);
}

export default Component;
