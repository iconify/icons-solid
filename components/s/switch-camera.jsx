import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh2s7ebjn.css';
import '../../css/s/saewjvbbt.css';
import '../../css/w/w4e8ihwgt.css';
import '../../css/d/d_-dzx7jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lh2s7ebjn wm-shadow"/><path class="saewjvbbt wm-shadow"/><path class="w4e8ihwgt"/><path class="d_-dzx7jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:switch-camera"} {...others} />);
}

export default Component;
