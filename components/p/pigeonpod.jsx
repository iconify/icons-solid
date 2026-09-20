import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vffi49svf.css';
import '../../css/y/yevybxblx.css';
import '../../css/p/pay1cacov.css';
import '../../css/d/degzzy46g.css';
import '../../css/s/s4n3kwjam.css';
import '../../css/m/myjb0abfw.css';
import '../../css/y/ye3evqb_b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vffi49svf"/><path class="yevybxblx"/><path class="pay1cacov"/><path class="degzzy46g"/><path class="s4n3kwjam"/><path class="myjb0abfw"/><path class="ye3evqb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pigeonpod"} {...others} />);
}

export default Component;
