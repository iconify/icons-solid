import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/n/nisb6ucws.css';
import '../../css/v/v_1d97bew.css';
import '../../css/w/wnf0z1b6j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="nisb6ucws"/><path class="v_1d97bew"/><path class="wnf0z1b6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-technology-spark"} {...others} />);
}

export default Component;
