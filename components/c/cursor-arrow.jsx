import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghg5u4q6s.css';
import '../../css/w/wo8_f4b3a.css';
import '../../css/k/k990pwbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ghg5u4q6s"/><path class="wo8_f4b3a"/><path class="k990pwbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-arrow"} {...others} />);
}

export default Component;
