import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8qdwpbgi.css';
import '../../css/l/l6sd8ob0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i8qdwpbgi"/><path class="l6sd8ob0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-watch-03"} {...others} />);
}

export default Component;
