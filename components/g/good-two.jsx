import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c1gpvkbrp.css';
import '../../css/c/c_6hkr-8e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="c1gpvkbrp"/><path class="c_6hkr-8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:good-two"} {...others} />);
}

export default Component;
