import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/u/ug3w78r_i.css';
import '../../css/n/nl7vp0j6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="ug3w78r_i"/><path class="nl7vp0j6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bookshelf"} {...others} />);
}

export default Component;
