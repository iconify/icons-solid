import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/g/gegxdc6-d.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/i/ip_q_kbgm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="gegxdc6-d"/><rect class="kw7ez0beo"/><rect class="ip_q_kbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-horizontal-center-two"} {...others} />);
}

export default Component;
