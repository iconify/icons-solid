import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6_8koigx.css';
import '../../css/u/u7v9-uihg.css';
import '../../css/y/y7fca_9em.css';
import '../../css/b/baxz_3tcy.css';
import '../../css/y/y23tjybgr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x6_8koigx"/><path class="u7v9-uihg"/><path class="y7fca_9em"/><path class="baxz_3tcy"/><path class="y23tjybgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-globe-48"} {...others} />);
}

export default Component;
