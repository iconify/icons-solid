import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucg8xbjld.css';
import '../../css/y/yqufnccgb.css';
import '../../css/d/dnu_c0bhd.css';
import '../../css/i/icqaqiboc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ucg8xbjld"/><path class="yqufnccgb"/><path class="dnu_c0bhd"/><path class="icqaqiboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:flyingenvelope"} {...others} />);
}

export default Component;
