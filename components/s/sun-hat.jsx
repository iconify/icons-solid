import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nl6rsdrsi.css';
import '../../css/m/meuhc9bia.css';
import '../../css/x/xdgehbn6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nl6rsdrsi"/><path class="meuhc9bia"/><path class="xdgehbn6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sun-hat"} {...others} />);
}

export default Component;
