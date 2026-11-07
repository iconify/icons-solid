import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcid6acgw.css';
import '../../css/y/yt8zcm-qf.css';
import '../../css/j/jait5vasr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bcid6acgw"/><path class="yt8zcm-qf"/><path class="jait5vasr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-square-bold-duotone"} {...others} />);
}

export default Component;
