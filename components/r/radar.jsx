import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/nxal037dx.css';
import '../../css/w/wbfltybql.css';
import '../../css/c/crac5rbvl.css';
import '../../css/o/o7bridc9g.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="nxal037dx"/><path class="wbfltybql"/><path class="crac5rbvl"/><path class="o7bridc9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:radar"} {...others} />);
}

export default Component;
