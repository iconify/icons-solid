import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/r/ravca3b4k.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/p/pgl28ibim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="ravca3b4k"/><rect class="kw7ez0beo"/><rect class="pgl28ibim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:horizontal-tidy-up"} {...others} />);
}

export default Component;
