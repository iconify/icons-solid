import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb3dnqqxo.css';
import '../../css/r/rsg8pgg3u.css';
import '../../css/x/x58z-5d-h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xb3dnqqxo"/><path class="rsg8pgg3u"/><path class="x58z-5d-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-x-20"} {...others} />);
}

export default Component;
