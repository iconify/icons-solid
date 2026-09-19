import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/no877j0-h.css';
import '../../css/z/ze7a6n2-t.css';
import '../../css/e/efkqgnb7v.css';
import '../../css/z/zhgmyyzqz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="no877j0-h"/><path class="ze7a6n2-t"/><path class="efkqgnb7v"/><path class="zhgmyyzqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-short-sleeve"} {...others} />);
}

export default Component;
