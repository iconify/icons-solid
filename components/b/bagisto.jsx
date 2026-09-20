import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffpnvgb5x.css';
import '../../css/k/kozsj6bao.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ffpnvgb5x"/><path class="kozsj6bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bagisto"} {...others} />);
}

export default Component;
