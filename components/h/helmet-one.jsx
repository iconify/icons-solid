import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/p/pg6h54d7a.css';
import '../../css/c/c05-njb-e.css';
import '../../css/r/rbbbhnbqi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="pg6h54d7a"/><rect class="c05-njb-e"/><rect class="rbbbhnbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:helmet-one"} {...others} />);
}

export default Component;
