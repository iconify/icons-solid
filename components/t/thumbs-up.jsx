import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lt82r9lvc.css';
import '../../css/a/au0vr77bm.css';
import '../../css/m/map9qsb7c.css';
import '../../css/n/ntdufachd.css';
import '../../css/a/azzi-rk2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lt82r9lvc wm-shadow"/><path class="au0vr77bm wm-shadow"/><path class="map9qsb7c"/><path class="ntdufachd"/><path class="azzi-rk2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:thumbs-up"} {...others} />);
}

export default Component;
