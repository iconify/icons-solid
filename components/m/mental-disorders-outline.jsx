import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgz6obkql.css';
import '../../css/d/dj7q2sbav.css';
import '../../css/p/pme4-2byq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dgz6obkql"/><path clip-rule="evenodd" class="dj7q2sbav"/><path clip-rule="evenodd" class="pme4-2byq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mental-disorders-outline"} {...others} />);
}

export default Component;
