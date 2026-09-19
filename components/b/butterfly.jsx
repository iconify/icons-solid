import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m-mnfwbjx.css';
import '../../css/c/czz7zfb8p.css';
import '../../css/v/vmjdawb4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m-mnfwbjx"/><path class="czz7zfb8p"/><path class="vmjdawb4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:butterfly"} {...others} />);
}

export default Component;
