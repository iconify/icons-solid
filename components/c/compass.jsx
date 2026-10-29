import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl5uzhbhz.css';
import '../../css/u/u-g8-l4ka.css';
import '../../css/k/kiy3eeynj.css';
import '../../css/n/n96ut4oqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl5uzhbhz wm-k"/><path class="u-g8-l4ka wm-a"/><path class="kiy3eeynj wm-a"/><path class="n96ut4oqc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:compass"} {...others} />);
}

export default Component;
