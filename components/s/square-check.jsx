import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iaqy45beb.css';
import '../../css/z/zhck8bc9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="iaqy45beb"/><path class="zhck8bc9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:square-check"} {...others} />);
}

export default Component;
