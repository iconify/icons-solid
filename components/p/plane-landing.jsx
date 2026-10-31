import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y40hbi6qp.css';
import '../../css/g/g12qyt31i.css';
import '../../css/j/j4qps2bou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y40hbi6qp"/><path class="g12qyt31i wm-shadow"/><path class="j4qps2bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:plane-landing"} {...others} />);
}

export default Component;
