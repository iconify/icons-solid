import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d82mjtvwm.css';
import '../../css/t/t7ilh-ble.css';
import '../../css/f/f03epxe8j.css';
import '../../css/x/x4454nkxz.css';
import '../../css/r/rgxsuca2p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d82mjtvwm"/><path clip-rule="evenodd" class="t7ilh-ble"/><path class="f03epxe8j"/><path class="x4454nkxz"/><path class="rgxsuca2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dictionary-language-book"} {...others} />);
}

export default Component;
