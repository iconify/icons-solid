import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o8-5w4b_i.css';
import '../../css/k/kfl-snbpg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="o8-5w4b_i"/><path class="kfl-snbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pencil-square"} {...others} />);
}

export default Component;
