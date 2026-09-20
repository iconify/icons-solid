import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryzj3q54b.css';
import '../../css/y/y_ejx8mec.css';
import '../../css/s/sfljat1ez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ryzj3q54b"/><circle class="y_ejx8mec"/><circle class="sfljat1ez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:sparkle"} {...others} />);
}

export default Component;
