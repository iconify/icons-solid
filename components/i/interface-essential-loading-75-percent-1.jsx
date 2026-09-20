import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbq02_gxn.css';
import '../../css/q/qlu-mbtpl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xbq02_gxn"/><path class="qlu-mbtpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-75-percent-1"} {...others} />);
}

export default Component;
