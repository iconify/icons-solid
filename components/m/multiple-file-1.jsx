import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fbqjlobpq.css';
import '../../css/e/emwkulbkz.css';
import '../../css/u/u8utqun4e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="fbqjlobpq"/><path class="emwkulbkz"/><path class="u8utqun4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:multiple-file-1"} {...others} />);
}

export default Component;
