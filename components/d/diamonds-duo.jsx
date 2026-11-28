import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewjozk71g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lw0cjcbam.css';
import '../../css/b/b8cpvtb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewjozk71g secondary"/><g class="dt0cm9dhy primary"><path class="lw0cjcbam"/><path class="b8cpvtb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:diamonds-duo"} {...others} />);
}

export default Component;
