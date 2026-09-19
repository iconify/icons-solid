import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/x/xnwg_sbwn.css';
import '../../css/i/i-tcsr9te.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="nsqnp5fhf"/><circle class="xnwg_sbwn"/><path class="i-tcsr9te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:control"} {...others} />);
}

export default Component;
