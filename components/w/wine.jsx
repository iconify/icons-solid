import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8lcihbbn.css';
import '../../css/s/sk_l22b4b.css';
import '../../css/d/ddsr2sbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i8lcihbbn"/><path class="sk_l22b4b"/><path class="ddsr2sbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:wine"} {...others} />);
}

export default Component;
