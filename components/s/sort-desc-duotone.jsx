import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjdplkbsa.css';
import '../../css/l/ldmlcslsr.css';
import '../../css/w/wd3sd6brj.css';
import '../../css/l/l-8a42bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xjdplkbsa"/><path class="ldmlcslsr"/><path class="wd3sd6brj"/><path class="l-8a42bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sort-desc-duotone"} {...others} />);
}

export default Component;
