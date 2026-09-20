import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aolcgbcee.css';
import '../../css/u/uqmgy3bvg.css';
import '../../css/l/lnc15sjoj.css';
import '../../css/g/g4ti84arf.css';
import '../../css/h/hg6y6kfxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aolcgbcee"/><path class="uqmgy3bvg"/><path class="lnc15sjoj"/><path clip-rule="evenodd" class="g4ti84arf"/><path clip-rule="evenodd" class="hg6y6kfxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-bold"} {...others} />);
}

export default Component;
