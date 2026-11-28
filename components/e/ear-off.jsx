import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwgngrfit.css';
import '../../css/k/kz2jgdb-f.css';
import '../../css/o/ohpg7ib8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jwgngrfit"/><path class="kz2jgdb-f"/><path class="ohpg7ib8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ear-off"} {...others} />);
}

export default Component;
