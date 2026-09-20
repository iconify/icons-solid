import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sj-rmmbkt.css';
import '../../css/n/npsxmea9i.css';
import '../../css/p/pt58k4boa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sj-rmmbkt"/><path class="npsxmea9i"/><path class="pt58k4boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chess-king"} {...others} />);
}

export default Component;
