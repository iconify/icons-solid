import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-z99rbkh.css';
import '../../css/o/odvridbwd.css';
import '../../css/q/q-o132bcq.css';
import '../../css/r/rb48yznjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j-z99rbkh"/><path class="odvridbwd"/><path class="q-o132bcq"/><path class="rb48yznjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-home2-duotone"} {...others} />);
}

export default Component;
