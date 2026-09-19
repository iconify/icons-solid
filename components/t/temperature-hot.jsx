import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_7oc_qfd.css';
import '../../css/i/iv8niybgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a_7oc_qfd"/><path class="iv8niybgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:temperature-hot"} {...others} />);
}

export default Component;
