import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l5-630b0o.css';
import '../../css/t/ta6tabc2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l5-630b0o"/><path class="ta6tabc2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flowchart-01"} {...others} />);
}

export default Component;
