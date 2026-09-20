import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sotk1i7ox.css';
import '../../css/m/mc10d90fo.css';
import '../../css/s/su8i8jbof.css';
import '../../css/p/p2z1cri5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sotk1i7ox"/><path class="mc10d90fo"/><path class="su8i8jbof"/><path class="p2z1cri5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:report-problem-warning-triangle"} {...others} />);
}

export default Component;
