import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g3k3sybmt.css';
import '../../css/r/rqcd37tkp.css';
import '../../css/x/xec1e65iq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="g3k3sybmt"/><path class="rqcd37tkp"/><path class="xec1e65iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cola"} {...others} />);
}

export default Component;
