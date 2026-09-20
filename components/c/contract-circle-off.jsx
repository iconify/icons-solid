import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrqo-c2lf.css';
import '../../css/x/xjlj7y8il.css';
import '../../css/g/gkhd8rbag.css';
import '../../css/g/gz7czkb_u.css';
import '../../css/e/esrilzeoo.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="yrqo-c2lf"/><path class="xjlj7y8il"/><path class="gkhd8rbag"/><path class="gz7czkb_u"/><path class="esrilzeoo"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:contract-circle-off"} {...others} />);
}

export default Component;
