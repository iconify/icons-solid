import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ctckbpm.css';
import '../../css/h/h4k-zibeu.css';
import '../../css/g/gnzb-7i7c.css';
import '../../css/n/nr0vkv33c.css';
import '../../css/h/h5470nuzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r5ctckbpm"/><path class="h4k-zibeu"/><path class="gnzb-7i7c"/><path class="nr0vkv33c"/><path class="h5470nuzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:factory"} {...others} />);
}

export default Component;
