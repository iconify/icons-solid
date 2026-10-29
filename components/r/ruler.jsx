import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl10uib_z.css';
import '../../css/m/md-hw5o0n.css';
import '../../css/i/ic5x_6btl.css';
import '../../css/j/jimwxrbhg.css';
import '../../css/u/ui99pgbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pl10uib_z wm-k"/><path class="md-hw5o0n wm-k"/><path class="ic5x_6btl wm-k"/><path class="jimwxrbhg wm-shine"/><path class="ui99pgbbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ruler"} {...others} />);
}

export default Component;
