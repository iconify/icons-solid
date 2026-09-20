import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbnr4p1ic.css';
import '../../css/j/j7zv28beo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rbnr4p1ic"/><path class="j7zv28beo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle-off-circle"} {...others} />);
}

export default Component;
