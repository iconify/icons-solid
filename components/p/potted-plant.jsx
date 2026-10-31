import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssv07eb-f.css';
import '../../css/r/rr4ocndgb.css';
import '../../css/s/sy2u0ubrg.css';
import '../../css/q/qyo7jvbod.css';
import '../../css/y/y293zvb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssv07eb-f wm-shadow"/><path class="rr4ocndgb wm-shadow"/><path class="sy2u0ubrg"/><path class="qyo7jvbod"/><path class="y293zvb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:potted-plant"} {...others} />);
}

export default Component;
