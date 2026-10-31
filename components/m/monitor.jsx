import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g7vsu8gjq.css';
import '../../css/e/e-cfrqb0c.css';
import '../../css/n/nwp06vpfo.css';
import '../../css/k/kttgb7bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g7vsu8gjq wm-shadow"/><path class="e-cfrqb0c wm-shadow"/><path class="nwp06vpfo"/><path class="kttgb7bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:monitor"} {...others} />);
}

export default Component;
