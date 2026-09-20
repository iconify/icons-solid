import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/s/s3b5adcgt.css';
import '../../css/o/oxet7p30y.css';
import '../../css/g/gtdnn0bvx.css';
import '../../css/e/e2o0nte5q.css';
import '../../css/g/g14wm2bdx.css';
import '../../css/h/hswnvybat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="s3b5adcgt"/><path class="oxet7p30y"/><path class="gtdnn0bvx"/><path class="e2o0nte5q"/><path class="g14wm2bdx"/><path class="hswnvybat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:oncoming-fist-1"} {...others} />);
}

export default Component;
