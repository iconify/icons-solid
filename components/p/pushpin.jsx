import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt0xhaboe.css';
import '../../css/i/ibygdfo4w.css';
import '../../css/x/xc__svjwh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rt0xhaboe"/><path class="ibygdfo4w"/><path class="xc__svjwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pushpin"} {...others} />);
}

export default Component;
