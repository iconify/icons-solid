import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aur6z7bmv.css';
import '../../css/s/s4jodsbfs.css';
import '../../css/z/zfharurqh.css';
import '../../css/s/s4yoveb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aur6z7bmv"/><path class="s4jodsbfs"/><path class="zfharurqh"/><path class="s4yoveb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:signal-2"} {...others} />);
}

export default Component;
