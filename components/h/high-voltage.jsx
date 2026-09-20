import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na378lbag.css';
import '../../css/m/moswv5bay.css';
import '../../css/n/nhtv5tn5e.css';
import '../../css/p/pza602uij.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="na378lbag"/><path class="moswv5bay"/><path class="nhtv5tn5e"/><path class="pza602uij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:high-voltage"} {...others} />);
}

export default Component;
