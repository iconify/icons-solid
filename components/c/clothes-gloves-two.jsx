import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bjcqupa3y.css';
import '../../css/o/ou428xbgv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bjcqupa3y"/><path class="ou428xbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-gloves-two"} {...others} />);
}

export default Component;
