import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad7xfnbza.css';
import '../../css/q/q2qfu38qw.css';
import '../../css/p/pnknbvpwt.css';
import '../../css/h/hrqmb838p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ad7xfnbza"/><path class="q2qfu38qw"/><path class="pnknbvpwt"/><path class="hrqmb838p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:movie-file-3-duo"} {...others} />);
}

export default Component;
