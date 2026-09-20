import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtdh4fb_d.css';
import '../../css/u/upx6wfzth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtdh4fb_d"/><path class="upx6wfzth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:cloudfoundry"} {...others} />);
}

export default Component;
