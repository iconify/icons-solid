import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/fe76870ub.css';
import '../../css/k/kn3ze0bti.css';
import '../../css/c/c3lurtbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="fe76870ub"/><path class="kn3ze0bti"/><path class="c3lurtbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:three-slashes"} {...others} />);
}

export default Component;
