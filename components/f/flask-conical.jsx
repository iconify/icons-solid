import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/asv8bq5ab.css';
import '../../css/q/qhlafk6oo.css';
import '../../css/g/gx_d1o28p.css';
import '../../css/o/oqb2ck4sg.css';
import '../../css/f/frtt-mb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="asv8bq5ab wm-shadow"/><path class="qhlafk6oo wm-shadow"/><path class="gx_d1o28p"/><path class="oqb2ck4sg"/><path class="frtt-mb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flask-conical"} {...others} />);
}

export default Component;
