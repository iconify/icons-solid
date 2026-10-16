import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk8ignbif.css';
import '../../css/f/f4xt2vwuy.css';
import '../../css/w/w6jv0yfwh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dk8ignbif"/><path class="f4xt2vwuy"/><path class="w6jv0yfwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dial-indicator-48-bold"} {...others} />);
}

export default Component;
