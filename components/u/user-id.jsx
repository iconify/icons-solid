import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdtq3ubbc.css';
import '../../css/w/wq-6doxql.css';
import '../../css/c/cl-6xabrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cdtq3ubbc"/><path class="wq-6doxql"/><path clip-rule="evenodd" class="cl-6xabrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-id"} {...others} />);
}

export default Component;
