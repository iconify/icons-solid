import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5kp7b5pf.css';
import '../../css/f/fi7t-7b3m.css';
import '../../css/q/qfwv274_r.css';
import '../../css/h/hw8ioqbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v5kp7b5pf"/><path clip-rule="evenodd" class="fi7t-7b3m"/><path class="qfwv274_r"/><path class="hw8ioqbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-sparkle"} {...others} />);
}

export default Component;
