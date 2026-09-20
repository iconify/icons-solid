import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5oc7fbcj.css';
import '../../css/y/yo-3_pbpo.css';
import '../../css/c/cfxvswb1c.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x5oc7fbcj"/><path clip-rule="evenodd" class="yo-3_pbpo"/><path clip-rule="evenodd" class="cfxvswb1c"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:shuffle-circle-off"} {...others} />);
}

export default Component;
