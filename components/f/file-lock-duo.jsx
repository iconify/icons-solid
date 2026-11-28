import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqcdvzl1b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/b/bkdlg8b0j.css';
import '../../css/h/hqjanifif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqcdvzl1b secondary"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="bkdlg8b0j"/><path class="hqjanifif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-lock-duo"} {...others} />);
}

export default Component;
