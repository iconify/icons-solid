import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/f/f1b8dob7c.css';
import '../../css/y/y06nxiblq.css';
import '../../css/h/hng779tvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="f1b8dob7c"/><rect class="y06nxiblq"/><rect class="hng779tvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-vertical-center-two"} {...others} />);
}

export default Component;
