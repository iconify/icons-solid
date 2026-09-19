import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wgj2rd0lr.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/w/wps6g-bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="wgj2rd0lr"/><rect class="kw7ez0beo"/><rect class="wps6g-bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-bottom-two"} {...others} />);
}

export default Component;
