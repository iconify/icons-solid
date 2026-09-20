import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjbmqob3y.css';
import '../../css/w/wm3-ncygf.css';
import '../../css/p/p46qrh6ib.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wjbmqob3y"/><path class="wm3-ncygf"/><path class="p46qrh6ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:azure"} {...others} />);
}

export default Component;
