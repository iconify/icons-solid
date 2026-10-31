import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dcmqnzbqa.css';
import '../../css/i/ijylj9byi.css';
import '../../css/m/mjj7opbva.css';
import '../../css/m/mvow69a0o.css';
import '../../css/x/xpz6724tn.css';
import '../../css/x/x1b5djb0v.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dcmqnzbqa wm-shadow"/><path class="ijylj9byi"/><path class="mjj7opbva"/><path class="mvow69a0o"/><path class="xpz6724tn"/><path class="x1b5djb0v"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:image-off"} {...others} />);
}

export default Component;
