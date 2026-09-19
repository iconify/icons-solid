import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ih1_axzgg.css';
import '../../css/a/ah05kygxw.css';
import '../../css/h/h1qy9y-ng.css';
import '../../css/i/i134pbq3l.css';
import '../../css/r/rechsfd8t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ih1_axzgg"/><path class="ah05kygxw"/><path class="h1qy9y-ng"/><path class="i134pbq3l"/><path class="rechsfd8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diapers-one"} {...others} />);
}

export default Component;
