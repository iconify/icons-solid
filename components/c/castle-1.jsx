import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auesgq7ai.css';
import '../../css/m/mbz4busmg.css';
import '../../css/d/dwlsvjb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="auesgq7ai"/><path class="mbz4busmg"/><path class="dwlsvjb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-1"} {...others} />);
}

export default Component;
