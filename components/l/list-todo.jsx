import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mu4bsjbjq.css';
import '../../css/f/f3v_2do4j.css';
import '../../css/o/o459361vv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mu4bsjbjq wm-shadow"/><path class="f3v_2do4j"/><path class="o459361vv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:list-todo"} {...others} />);
}

export default Component;
