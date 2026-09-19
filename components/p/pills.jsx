import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5f04da_o.css';
import '../../css/z/z6utj2bgt.css';
import '../../css/d/d9xymp2te.css';
import '../../css/y/yl_z4k5yt.css';
import '../../css/s/szhs4bfcc.css';
import '../../css/y/yf6a-mtmo.css';

const viewBox = {"width":99.979,"height":99.977};
const content = `<path class="u5f04da_o"/><path class="z6utj2bgt"/><path class="d9xymp2te"/><path class="yl_z4k5yt"/><path class="szhs4bfcc"/><path class="yf6a-mtmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:pills"} {...others} />);
}

export default Component;
