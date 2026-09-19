import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/g/g50eo_bim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><circle class="bshyy_b6k"/><path class="g50eo_bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:girl-one"} {...others} />);
}

export default Component;
