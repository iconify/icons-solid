import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e1uzmwbsc.css';
import '../../css/w/wyzyqwb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e1uzmwbsc"/><path class="wyzyqwb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note-remove"} {...others} />);
}

export default Component;
