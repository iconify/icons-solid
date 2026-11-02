import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2wg_xbzr.css';
import '../../css/h/huflwkbsf.css';
import '../../css/y/yp4zj8ohv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x2wg_xbzr"/><path class="huflwkbsf"/><path class="yp4zj8ohv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:lwc"} {...others} />);
}

export default Component;
