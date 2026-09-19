import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/h/hz_qsuwka.css';
import '../../css/d/dj487cy_p.css';
import '../../css/w/wano3i20j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><circle class="hz_qsuwka"/><circle class="dj487cy_p"/><circle class="wano3i20j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bubble-chart"} {...others} />);
}

export default Component;
