import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/w/wi6j9dbfk.css';
import '../../css/v/vzvvnn72g.css';
import '../../css/d/dkr-ktbwc.css';
import '../../css/s/ss9xfthse.css';
import '../../css/y/ygynpqima.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="wi6j9dbfk"/><path class="vzvvnn72g"/><path class="dkr-ktbwc"/><path class="ss9xfthse"/><path class="ygynpqima"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:notification-alert"} {...others} />);
}

export default Component;
