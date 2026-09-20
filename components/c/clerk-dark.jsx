import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/c/ce9wo0wqz.css';
import '../../css/s/s_xed7b6t.css';
import '../../css/i/ie__sd2_z.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="n1mjunbsu"><circle class="ce9wo0wqz"/><path class="s_xed7b6t"/><path class="ie__sd2_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:clerk-dark"} {...others} />);
}

export default Component;
