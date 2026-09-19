import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbvjs_2tm.css';
import '../../css/s/s_phngbxd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sbvjs_2tm"/><path class="s_phngbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:electricplug"} {...others} />);
}

export default Component;
