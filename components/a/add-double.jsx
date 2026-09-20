import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2dgu7u9m.css';
import '../../css/o/o3f-wscjt.css';
import '../../css/t/t78pq3b0b.css';
import '../../css/b/bat3n3-jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x2dgu7u9m"/><path class="o3f-wscjt"/><path class="t78pq3b0b"/><path class="bat3n3-jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:add-double"} {...others} />);
}

export default Component;
