import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ageb62bvz.css';
import '../../css/l/ln6v62bgu.css';
import '../../css/a/acyinezdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ageb62bvz"/><path class="ln6v62bgu"/><path clip-rule="evenodd" class="acyinezdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speaker"} {...others} />);
}

export default Component;
