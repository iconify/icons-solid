import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r--u3_bao.css';
import '../../css/f/fqdc5x1vs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r--u3_bao"/><path class="fqdc5x1vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-right"} {...others} />);
}

export default Component;
