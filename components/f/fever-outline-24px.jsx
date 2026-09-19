import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ol9j3tbce.css';
import '../../css/y/y8jq-7b-y.css';
import '../../css/l/lsw_2ibkc.css';
import '../../css/f/f-onb3b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ol9j3tbce"/><path class="y8jq-7b-y"/><path clip-rule="evenodd" class="lsw_2ibkc"/><path class="f-onb3b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fever-outline-24px"} {...others} />);
}

export default Component;
