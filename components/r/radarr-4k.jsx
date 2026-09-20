import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qitm67bso.css';
import '../../css/v/vwcipgbuu.css';
import '../../css/e/en7xt8pxd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qitm67bso"/><path class="vwcipgbuu"/><path class="en7xt8pxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radarr-4k"} {...others} />);
}

export default Component;
