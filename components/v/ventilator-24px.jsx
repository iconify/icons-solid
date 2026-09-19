import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhnl5tocy.css';
import '../../css/n/nsw5-gahy.css';
import '../../css/x/xav8j7y3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bhnl5tocy"/><path clip-rule="evenodd" class="nsw5-gahy"/><path class="xav8j7y3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator-24px"} {...others} />);
}

export default Component;
