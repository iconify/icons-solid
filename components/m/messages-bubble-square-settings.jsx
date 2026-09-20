import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulx3utvkz.css';
import '../../css/x/xzrhcac4o.css';
import '../../css/s/s8q4d1yjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ulx3utvkz"/><path class="xzrhcac4o"/><path class="s8q4d1yjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-bubble-square-settings"} {...others} />);
}

export default Component;
