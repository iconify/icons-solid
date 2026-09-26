import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cf4va2ows.css';
import '../../css/r/r7wajpbsm.css';
import '../../css/h/hxxn-3jdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cf4va2ows"/><path class="r7wajpbsm"/><path class="hxxn-3jdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-bold"} {...others} />);
}

export default Component;
