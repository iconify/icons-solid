import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbip4acpr.css';
import '../../css/l/l8vstnbtr.css';
import '../../css/k/kyhd0b60t.css';
import '../../css/h/h27wz8b3f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vbip4acpr"/><path class="l8vstnbtr"/><path class="kyhd0b60t"/><path class="h27wz8b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:align-selection"} {...others} />);
}

export default Component;
