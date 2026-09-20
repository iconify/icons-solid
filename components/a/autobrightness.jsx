import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/e3jn3-obu.css';
import '../../css/h/h-w298izb.css';
import '../../css/t/t13hr5bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="e3jn3-obu"/><path class="h-w298izb"/><path class="t13hr5bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:autobrightness"} {...others} />);
}

export default Component;
