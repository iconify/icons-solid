import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-f_sqb8q.css';
import '../../css/a/aicw3bbuy.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};
const content = `<g class="cuyn6tgcc"><path class="f-f_sqb8q"/><path class="aicw3bbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:quora-circle"} {...others} />);
}

export default Component;
