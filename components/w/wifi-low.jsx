import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4cec1b5g.css';
import '../../css/d/dijuj1icq.css';
import '../../css/n/n7436gv2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="i4cec1b5g"><path class="dijuj1icq"/><path class="n7436gv2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:wifi-low"} {...others} />);
}

export default Component;
