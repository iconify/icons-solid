import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mvwnt9b_o.css';
import '../../css/h/h9m2gfgza.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mvwnt9b_o"/><path class="h9m2gfgza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:landscape-2"} {...others} />);
}

export default Component;
