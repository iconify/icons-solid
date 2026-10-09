import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scb7y9b9c.css';
import '../../css/i/idw1h8qwq.css';
import '../../css/j/j7lslxezw.css';
import '../../css/y/yp6p--jhv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="scb7y9b9c"/><path class="idw1h8qwq"/><path class="j7lslxezw"/><path class="yp6p--jhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:investment-48"} {...others} />);
}

export default Component;
