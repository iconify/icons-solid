import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aknv7ibxi.css';
import '../../css/u/um8zde66c.css';
import '../../css/v/vsnwok-ma.css';
import '../../css/w/w3zx75mym.css';
import '../../css/k/kq-b_9b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aknv7ibxi"/><path class="um8zde66c"/><path class="vsnwok-ma"/><path class="w3zx75mym"/><path class="kq-b_9b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pi"} {...others} />);
}

export default Component;
