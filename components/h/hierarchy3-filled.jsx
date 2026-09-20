import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1ws40mxs.css';
import '../../css/q/qgpyexh-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v1ws40mxs"/><path class="qgpyexh-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hierarchy3-filled"} {...others} />);
}

export default Component;
