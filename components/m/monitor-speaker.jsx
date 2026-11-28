import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lwzhbozbb.css';
import '../../css/i/iko2wpiij.css';
import '../../css/g/gupzlzbzq.css';
import '../../css/f/f1jk_cb4z.css';
import '../../css/f/f6t_3ty3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lwzhbozbb"/><path class="iko2wpiij"/><path class="gupzlzbzq"/><path class="f1jk_cb4z"/><path class="f6t_3ty3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-speaker"} {...others} />);
}

export default Component;
