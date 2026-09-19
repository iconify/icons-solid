import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy4_knhwd.css';
import '../../css/z/zsplw2euu.css';
import '../../css/x/xxfidpltx.css';
import '../../css/f/fjdufdgrf.css';
import '../../css/l/lair98k-j.css';
import '../../css/b/bb6dw3b9n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iy4_knhwd"/><path class="zsplw2euu"/><circle class="xxfidpltx"/><circle class="fjdufdgrf"/><path class="lair98k-j"/><circle class="bb6dw3b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cooking"} {...others} />);
}

export default Component;
