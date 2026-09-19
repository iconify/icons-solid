import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/n/nok-9wbgu.css';
import '../../css/f/f_1js0uww.css';
import '../../css/u/u_eetobob.css';
import '../../css/b/bbxcluyzs.css';
import '../../css/b/bs3iw2bus.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="nok-9wbgu"/><path class="f_1js0uww"/><path class="u_eetobob"/><path class="bbxcluyzs"/><path class="bs3iw2bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-two"} {...others} />);
}

export default Component;
