import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf8md-ebl.css';
import '../../css/n/nzlse_b6a.css';
import '../../css/d/d0_q4g1fu.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xf8md-ebl"/><path class="nzlse_b6a"/><path class="d0_q4g1fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets-flask-dark"} {...others} />);
}

export default Component;
