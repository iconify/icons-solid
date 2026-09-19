import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_1es1p0u.css';
import '../../css/i/iny3_db3v.css';
import '../../css/u/uvnpe-bqr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y_1es1p0u"/><path class="iny3_db3v"/><path class="uvnpe-bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-buffer"} {...others} />);
}

export default Component;
