import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/f1e6itz1y.css';
import '../../css/r/relv2qoph.css';
import '../../css/y/y6_hf6fcx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="f1e6itz1y"/><rect transform="rotate(45 28.121 13.808)" class="relv2qoph"/><rect transform="rotate(45 15.394 23.707)" class="y6_hf6fcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lipstick-one"} {...others} />);
}

export default Component;
