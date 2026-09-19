import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/e/e9i1fcj0j.css';
import '../../css/q/qpqb8x8mq.css';
import '../../css/c/c0l8x22zz.css';
import '../../css/y/yw_vmbbqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="e9i1fcj0j"/><path class="qpqb8x8mq"/><path class="c0l8x22zz"/><path class="yw_vmbbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-two"} {...others} />);
}

export default Component;
