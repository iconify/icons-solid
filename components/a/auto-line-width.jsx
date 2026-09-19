import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b1jpqqbox.css';
import '../../css/y/yfuxcacdn.css';
import '../../css/h/htije8rue.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="b1jpqqbox"/><path class="yfuxcacdn"/><path class="htije8rue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:auto-line-width"} {...others} />);
}

export default Component;
