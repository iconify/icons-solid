import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iol3lcl0r.css';
import '../../css/c/ca0b8gbic.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="iol3lcl0r"/><path class="ca0b8gbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:gift"} {...others} />);
}

export default Component;
