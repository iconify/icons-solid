import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/or693yu9a.css';
import '../../css/r/r-tfq900y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="or693yu9a"/><path class="r-tfq900y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palette"} {...others} />);
}

export default Component;
