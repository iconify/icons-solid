import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/m/m__36j5rb.css';
import '../../css/i/i-tcsr9te.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="nsqnp5fhf"/><circle class="m__36j5rb"/><path class="i-tcsr9te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:control"} {...others} />);
}

export default Component;
