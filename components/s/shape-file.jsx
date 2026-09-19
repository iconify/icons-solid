import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6wzr80le.css';
import '../../css/y/yt-9su_gy.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f6wzr80le"/><path class="yt-9su_gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:shape-file"} {...others} />);
}

export default Component;
