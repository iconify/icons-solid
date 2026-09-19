import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxoyierhi.css';
import '../../css/d/dwqux_e7p.css';
import '../../css/w/wozsguqxs.css';
import '../../css/s/sw1ncqnov.css';
import '../../css/q/qgz_s6bxq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jxoyierhi"/><path class="dwqux_e7p"/><path class="wozsguqxs"/><path class="sw1ncqnov"/><path class="qgz_s6bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:angularjs"} {...others} />);
}

export default Component;
