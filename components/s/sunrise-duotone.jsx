import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp5j2ccqf.css';
import '../../css/j/ja77_8b3m.css';
import '../../css/i/icrs1w02v.css';
import '../../css/q/qywvln1_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yp5j2ccqf"/><path class="ja77_8b3m"/><path class="icrs1w02v"/><path class="qywvln1_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sunrise-duotone"} {...others} />);
}

export default Component;
