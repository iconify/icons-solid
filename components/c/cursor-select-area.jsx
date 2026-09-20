import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulcx3bc8c.css';
import '../../css/v/vv8vi8b-x.css';
import '../../css/x/xmtft0nnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ulcx3bc8c"/><path class="vv8vi8b-x"/><path class="xmtft0nnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-select-area"} {...others} />);
}

export default Component;
