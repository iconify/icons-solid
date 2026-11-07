import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd4l-wycb.css';
import '../../css/p/prycr4uyu.css';
import '../../css/g/gn_f1tn5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd4l-wycb"/><path class="prycr4uyu"/><path class="gn_f1tn5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-off-bold-duotone"} {...others} />);
}

export default Component;
