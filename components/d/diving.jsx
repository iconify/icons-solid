import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fnaudbb4k.css';
import '../../css/r/ro_s5ibre.css';
import '../../css/g/gq5h8r63u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fnaudbb4k"/><path class="ro_s5ibre"/><path class="gq5h8r63u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diving"} {...others} />);
}

export default Component;
