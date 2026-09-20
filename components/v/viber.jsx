import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqhndumgg.css';
import '../../css/x/x6kxjebdn.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<g class="cuyn6tgcc"><path class="hqhndumgg"/><path class="x6kxjebdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:viber"} {...others} />);
}

export default Component;
