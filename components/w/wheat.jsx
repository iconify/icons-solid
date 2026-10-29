import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-jn8moas.css';
import '../../css/n/nefmuxb7i.css';
import '../../css/e/ec07nutst.css';
import '../../css/d/diveyknpc.css';
import '../../css/e/egczxtb9e.css';
import '../../css/h/hzk5eacet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l-jn8moas"/><path class="nefmuxb7i"/><path class="ec07nutst"/><path class="diveyknpc"/><path class="egczxtb9e"/><path class="hzk5eacet wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wheat"} {...others} />);
}

export default Component;
