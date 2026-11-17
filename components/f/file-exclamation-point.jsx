import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/arhb1ubmx.css';
import '../../css/n/n31e0bb5t.css';
import '../../css/y/y14oxgb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="arhb1ubmx"/><path class="n31e0bb5t"/><path class="y14oxgb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-exclamation-point"} {...others} />);
}

export default Component;
