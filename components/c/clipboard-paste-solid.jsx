import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g825mr9gl.css';
import '../../css/n/nmtpehbcc.css';
import '../../css/x/xth5tgb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g825mr9gl"/><path class="nmtpehbcc"/><path class="xth5tgb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:clipboard-paste-solid"} {...others} />);
}

export default Component;
