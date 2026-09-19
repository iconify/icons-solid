import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/takzk-jyd.css';
import '../../css/f/fv53-_znf.css';
import '../../css/o/okp79cnhl.css';
import '../../css/g/gv1_8gbkr.css';
import '../../css/a/aiwpulq5m.css';
import '../../css/z/z-e8dy4aa.css';
import '../../css/v/v8x3jibub.css';
import '../../css/o/on_rdn0gl.css';
import '../../css/d/dp9zvtbzt.css';
import '../../css/d/d4fobsbmm.css';
import '../../css/f/f0rq9j88x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="takzk-jyd"/><path class="fv53-_znf"/><path class="okp79cnhl"/><path class="gv1_8gbkr"/><path class="aiwpulq5m"/><path class="z-e8dy4aa"/><path class="v8x3jibub"/><path class="on_rdn0gl"/><path class="dp9zvtbzt"/><path class="d4fobsbmm"/><path class="f0rq9j88x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:workflows"} {...others} />);
}

export default Component;
