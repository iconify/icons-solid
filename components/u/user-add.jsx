import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfwn9qb7o.css';
import '../../css/o/o0l6usxvj.css';
import '../../css/g/ghf43lb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lfwn9qb7o"/><path clip-rule="evenodd" class="o0l6usxvj"/><path class="ghf43lb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add"} {...others} />);
}

export default Component;
