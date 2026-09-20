import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya9kw7fhk.css';
import '../../css/r/r0_ieedtm.css';
import '../../css/a/ak916kbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ya9kw7fhk"/><path clip-rule="evenodd" class="r0_ieedtm"/><path clip-rule="evenodd" class="ak916kbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:game-controller"} {...others} />);
}

export default Component;
