import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j3x2t6bon.css';
import '../../css/d/d_0bx4bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j3x2t6bon"/><path class="d_0bx4bql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:snooze"} {...others} />);
}

export default Component;
