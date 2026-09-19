import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/cdvy5kbya.css';
import '../../css/y/y06nxiblq.css';
import '../../css/t/tho7co-hn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="cdvy5kbya"/><rect class="y06nxiblq"/><rect class="tho7co-hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vertical-tidy-up"} {...others} />);
}

export default Component;
