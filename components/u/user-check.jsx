import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vnq981bkn.css';
import '../../css/l/l8q8ovjdk.css';
import '../../css/z/zoh2-g5is.css';
import '../../css/p/paqk5i3rz.css';
import '../../css/s/sx6wexott.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vnq981bkn wm-shadow"/><path class="l8q8ovjdk wm-shadow"/><path class="zoh2-g5is"/><path class="paqk5i3rz"/><path class="sx6wexott wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user-check"} {...others} />);
}

export default Component;
