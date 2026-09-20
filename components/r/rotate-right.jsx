import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/d/d82tadb4s.css';
import '../../css/t/t_wbmxjju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="d82tadb4s"/><path class="t_wbmxjju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:rotate-right"} {...others} />);
}

export default Component;
