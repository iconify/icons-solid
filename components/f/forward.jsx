import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aycg3acys.css';
import '../../css/z/zt1mo70im.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="aycg3acys"/><path class="zt1mo70im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:forward"} {...others} />);
}

export default Component;
