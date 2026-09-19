import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vsr4mized.css';
import '../../css/i/igldjbc5v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vsr4mized"/><path class="igldjbc5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:go-on"} {...others} />);
}

export default Component;
