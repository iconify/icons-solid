import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy901f9ms.css';
import '../../css/n/n-5kzabfr.css';
import '../../css/d/d0_q4g1fu.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vy901f9ms"/><path class="n-5kzabfr"/><path class="d0_q4g1fu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beets-flask-dark"} {...others} />);
}

export default Component;
