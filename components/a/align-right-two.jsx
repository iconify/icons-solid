import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c5z8ne86d.css';
import '../../css/y/y06nxiblq.css';
import '../../css/o/o5wfiqbxv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="c5z8ne86d"/><rect class="y06nxiblq"/><rect class="o5wfiqbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-right-two"} {...others} />);
}

export default Component;
