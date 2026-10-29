import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nufdozswc.css';
import '../../css/w/wxl256sll.css';
import '../../css/d/d362vvb3s.css';
import '../../css/b/bp9cujbno.css';
import '../../css/h/h89yotbkz.css';
import '../../css/m/m91saewcq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nufdozswc wm-shadow"/><path class="wm-k wxl256sll"/><path class="d362vvb3s wm-k"/><path class="bp9cujbno wm-k"/><path class="h89yotbkz wm-k"/><path class="m91saewcq wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:grip-horizontal"} {...others} />);
}

export default Component;
