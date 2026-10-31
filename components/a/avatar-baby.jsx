import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tdhkvdb_j.css';
import '../../css/g/gk6bacbrc.css';
import '../../css/r/rps76bcfx.css';
import '../../css/s/ss0hvrbeg.css';
import '../../css/q/qpygcaclf.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tdhkvdb_j wm-shadow"/><path class="gk6bacbrc"/><path class="rps76bcfx"/><path class="ss0hvrbeg"/><path class="qpygcaclf"/><path class="s7hum9b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-baby"} {...others} />);
}

export default Component;
