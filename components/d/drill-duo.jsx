import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eqyqj9bbr.css';
import '../../css/s/sg46neb7i.css';
import '../../css/m/m5u5l5b7g.css';
import '../../css/j/jrm8jlzgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eqyqj9bbr"/><path class="sg46neb7i wm-a"/><path class="m5u5l5b7g wm-a"/><path class="jrm8jlzgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drill-duo"} {...others} />);
}

export default Component;
