import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a77335b_u.css';
import '../../css/i/izhvc4evb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a77335b_u"/><path class="izhvc4evb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mediaeditor"} {...others} />);
}

export default Component;
