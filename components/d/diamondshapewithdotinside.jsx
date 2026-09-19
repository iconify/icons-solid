import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmh6thbmv.css';
import '../../css/w/wliz8yb9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmh6thbmv"/><circle class="wliz8yb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:diamondshapewithdotinside"} {...others} />);
}

export default Component;
