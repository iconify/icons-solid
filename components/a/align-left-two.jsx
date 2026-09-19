import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/l/li3mw6bcq.css';
import '../../css/y/y06nxiblq.css';
import '../../css/v/v_qzst-mc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="li3mw6bcq"/><rect class="y06nxiblq"/><rect class="v_qzst-mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-left-two"} {...others} />);
}

export default Component;
