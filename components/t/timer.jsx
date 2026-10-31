import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dutcirbli.css';
import '../../css/j/jgkg7zb-g.css';
import '../../css/n/n9ukxqbrt.css';
import '../../css/v/vu52rbc-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dutcirbli wm-shadow"/><path class="jgkg7zb-g wm-shadow"/><path class="n9ukxqbrt"/><path class="vu52rbc-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:timer"} {...others} />);
}

export default Component;
