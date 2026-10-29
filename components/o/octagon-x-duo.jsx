import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n8yc7ccpm.css';
import '../../css/j/jmo57ab0a.css';
import '../../css/b/b82dfnb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n8yc7ccpm"/><path class="jmo57ab0a wm-a"/><path class="b82dfnb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-x-duo"} {...others} />);
}

export default Component;
