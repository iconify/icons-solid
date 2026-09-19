import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/i/ipmfw8jim.css';
import '../../css/n/npkoh8bln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="ipmfw8jim"/><path class="npkoh8bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:five-star-badge"} {...others} />);
}

export default Component;
